import { Command } from '../../../../abstracts/Command'
import { ArgumentDefinition } from '../../../../types/ArgumentDefinition'
import { RichEmbed } from 'discord.js'
import { CommandInterface } from '../../../../interfaces/Command'
import { CommandRequest } from '../../../../impls/CommandRequest'
import { ArgumentType } from '../../../../types/ArgumentType'

/**
 * Help command.
 */
export class HelpCommand extends Command {
  /**
   * Max command names.
   */
  readonly maxCommandNames = 10

  /**
   * Name.
   */
  readonly name = 'help'

  /**
   * Description.
   */
  readonly description = 'Show help.'

  /**
   * Args.
   */
  readonly args: ArgumentDefinition[] = [
    {
      name: 'commandName',
      required: false,
      description: 'Command name.',
      candidates: () => {
        const names = this.bot.commands.map(({ name }) => name)
        return names.length > this.maxCommandNames
          ? names.slice(0, this.maxCommandNames)
          : names
      }
    }
  ]

  /**
   * Run.
   */
  run([command]: [string?], request: CommandRequest) {
    if (command) {
      return this.respondCommand(command, request)
    } else {
      return this.respondHelp(request)
    }
  }

  /**
   * Respond command.
   *
   * @param commandName
   */
  private respondCommand(commandName: string, request: CommandRequest) {
    const command = this.bot.commands.find(
      command => command.name === commandName
    )
    if (!command) {
      return this.error(`Command "${commandName}" is not found.`)
    }

    const embed = new RichEmbed()
    const usage = this.getCommandUsage(command, request.prefix)

    embed
      .setTitle(command.name)
      .setColor(this.bot.color)
      .setDescription(command.description)
      .addField('Usage', '`' + usage + '`')

    for (const arg of command.compiledArgs) {
      embed.addField(arg.name, this.argumentTypeToString(arg.type), true)
    }

    return this.reply(embed)
  }

  /**
   * Respond help.
   */
  private respondHelp(request: CommandRequest) {
    const commands = this.bot.commands
    const embed = new RichEmbed()

    embed
      .setTitle(`${this.bot.name}`)
      .setThumbnail(this.context.client.user.displayAvatarURL)
      .setColor(this.bot.color)
      .addField(
        'Version',
        this.bot.versionString + (this.bot.isBetaVersion ? '<beta>' : '')
      )
      .addField('Prefixes', this.bot.prefixes.join(' '))

    for (const command of commands) {
      embed.addField(
        request.prefix + command.name,
        command.description || 'No description provided.',
        true
      )
    }

    return this.reply(embed)
  }

  /**
   * Get command usage.
   *
   * @param command
   */
  private getCommandUsage(command: CommandInterface, prefix: string) {
    let usage = `${prefix}${command.name} `

    if (command.singleArg) {
      usage += '[...args]'
    } else {
      usage += command.compiledArgs
        .map(arg => {
          const name = arg.candidates()
            ? `(${arg.candidates().join('|')})`
            : arg.name
          return `[${name}${arg.required ? '' : '?'}]`
        })
        .join(' ')
    }

    return usage
  }

  /**
   * Argument type to string.
   *
   * @param type
   */
  private argumentTypeToString(type: ArgumentType) {
    switch (type) {
      case ArgumentType.Any:
        return 'Any'
      case ArgumentType.Boolean:
        return 'Boolean'
      case ArgumentType.Number:
        return 'Number'
      case ArgumentType.String:
        return 'String'
    }
    return 'Unknown'
  }
}
