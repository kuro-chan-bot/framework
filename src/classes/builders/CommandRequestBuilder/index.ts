import { BuilderInterface } from '../../../interfaces/Builder'
import { CommandRequest } from '../../../impls/CommandRequest'
import { Command } from '../../../abstracts/Command'
import { ArgumentType } from '../../../types/ArgumentType'
import { Message } from 'discord.js'

/*
 * Command request builder.
 */
export class CommandRequestBuilder implements BuilderInterface<CommandRequest> {
  /**
   * Message.
   */
  private message!: Message

  /**
   * Prefix.
   */
  private prefix!: string

  /**
   * Command.
   */
  private command!: Command

  /**
   * Command string.
   */
  private commandString!: string

  /**
   * Args.
   */
  private args: any[] = []

  /**
   * Args string.
   */
  private argsString!: string

  /**
   * Set message.
   *
   * @param message
   */
  setMessage(message: Message) {
    this.message = message
    return this
  }

  /**
   * Set prefix.
   */
  setPrefix(prefix: string) {
    this.prefix = prefix
    return this
  }

  /**
   * Set command.
   *
   * @param command
   */
  setCommand(command: Command) {
    this.command = command
    return this
  }

  /**
   * Set command string.
   *
   * @param string
   */
  setCommandString(string: string) {
    this.commandString = string
    return this
  }

  /**
   * Set args.
   *
   * @param args
   */
  setArgs(args: any[]) {
    this.args = args
    return this
  }

  /**
   * Set args string.
   *
   * @param string
   */
  setArgsString(string: string) {
    this.argsString = string
    return this
  }

  /**
   * Build.
   */
  build() {
    return new CommandRequest({
      message: this.message,
      prefix: this.prefix,
      command: this.command,
      commandString: this.commandString,
      args: this.args,
      argsString: this.argsString
    })
  }
}
