import { Listener } from '../../../abstracts/Listener'
import { Message } from 'discord.js'
import { CommandRequestBuilder } from '../../builders/CommandRequestBuilder'
import { Command } from '../../../abstracts/Command'
import { ArgumentParser } from '@kuro-chan/argument-parser'
import { CommandRequest } from '../../../impls/CommandRequest'
import { KuroFrameworkError } from '../../errors/KuroFrameworkError'
import { ErrorResponse } from '../../responses/ErrorResponse'
import { ParseMessage } from '../../../types/ParseMessage'
import { MessageParser } from '../../../impls/MessageParser'

type ParsePipe = {
  commandString: string
  argsString: string
}

/**
 * Command service.
 */
export class CommandService extends Listener {
  /**
   * Message parser.
   */
  private get messageParser() {
    return new MessageParser(this.bot.prefixes)
  }

  /**
   * On message.
   *
   * @param message
   */
  async onMessage(message: Message) {
    const contentParsed = this.parseMessage(message)
    if (!contentParsed) return

    try {
      if (contentParsed.commandString === '') {
        await this.pipeline(contentParsed)
      } else {
        await this.command(contentParsed)
      }
    } catch (error) {
      const response = new ErrorResponse(error)
      response.dispatch({ message })
    }
  }

  /**
   * Execute pipeline.
   *
   * @param data
   */
  private async pipeline(data: ParseMessage) {
    const pipes = data.argsString.split(/ ?[^\\]> ?/g)

    if (pipes.length === 0) {
      throw new KuroFrameworkError('Pipeline should have first command.')
    } else if (pipes.length === 1) {
      const last = this.parsePipe(pipes[0])
      await this.command({
        ...data,
        commandString: last.commandString,
        argsString: this.parseArgs(last.argsString).join(' ')
      })
    } else {
      let args = await this.dispatchPipe(this.parsePipe(pipes[0]), [], data)

      for (const pipe of pipes.slice(1, -1)) {
        args = await this.dispatchPipe(this.parsePipe(pipe), args, data)
      }

      const last = this.parsePipe(pipes[pipes.length - 1])
      await this.command({
        ...data,
        commandString: last.commandString,
        argsString: [...this.parseArgs(last.argsString), ...args].join(' ')
      })
    }
  }

  /**
   * Dispatch pipe.
   *
   * @param pipe
   * @param addArgs
   * @param message
   */
  private async dispatchPipe(
    pipe: ParsePipe,
    addArgs: any[],
    message: ParseMessage
  ) {
    const commandString = pipe.commandString
    const argsString = pipe.argsString

    const command = this.getCommand(commandString)

    if (command) {
      const args = this.parseArgs(argsString)
      return await command.pipe([...args, ...addArgs], message)
    } else {
      throw new KuroFrameworkError(
        `Pipeline command ${commandString} is not found.`
      )
    }
  }

  /**
   * Parse pipe.
   *
   * @param pipe
   */
  private parsePipe(pipe: string): ParsePipe {
    return {
      commandString: pipe.split(' ')[0],
      argsString: pipe
        .split(' ')
        .slice(1)
        .join(' ')
    }
  }

  /**
   * Execute command.
   *
   * @param data
   */
  private async command(data: ParseMessage) {
    const request = this.buildRequest(data)

    await this.dispatchCommandRequest(request)

    return request
  }

  /**
   * Dispatch command request.
   *
   * @param request
   */
  private async dispatchCommandRequest(request: CommandRequest) {
    const command = request.command

    if (command) {
      const response = await command.run(request.args, request)
      if (response) await response.dispatch(request)
      return response
    } else {
      throw new KuroFrameworkError(
        `Command ${request.commandString} is not found.`
      )
    }
  }

  /**
   * Build request.
   *
   * @param data
   */
  private buildRequest(data: ParseMessage) {
    const builder = new CommandRequestBuilder()
    const command = this.getCommand(data.commandString) as Command
    builder
      .setMessage(data.message)
      .setPrefix(data.prefix)
      .setCommand(command)
      .setCommandString(data.commandString)
      .setArgs(
        command && command.singleArg
          ? [data.argsString]
          : this.parseArgs(data.argsString)
      )
      .setArgsString(data.argsString)

    return builder.build()
  }

  /**
   * Parse args.
   *
   * @param argsString
   */
  private parseArgs(argsString: string) {
    if (argsString === '') return []

    const parser = new ArgumentParser()

    return parser.parse(argsString) as any[]
  }

  /**
   * Get command.
   *
   * @param commandString
   */
  private getCommand(commandString: string) {
    return this.bot.commands.find(command => {
      if (
        command.name === commandString ||
        command.aliases.find(alias => alias === commandString)
      )
        return true
    })
  }

  /**
   * Parse message.
   *
   * @param message
   * @param prefix
   */
  parseMessage(message: Message) {
    return this.messageParser.parse(message)
  }

  /**
   * Get prefix string.
   *
   * @param content
   */
  getPrefixString(content: string) {
    for (const prefix of this.bot.prefixes) {
      if (typeof prefix === 'string' && content.startsWith(prefix))
        return prefix

      if (prefix instanceof RegExp) {
        const matches = content.match(prefix)
        if (matches) return matches[0]
      }
    }

    return false
  }
}
