import { CommandRequestInterface } from '../../interfaces/CommandRequest'
import { Message } from 'discord.js'
import { Command } from '../../abstracts/Command'
import { ArgumentType } from '../../types/ArgumentType'

/*
 *
 */
export class CommandRequest implements CommandRequestInterface {
  /**
   * Message.
   */
  message!: Message

  /**
   * Prefix.
   */
  prefix!: string

  /**
   * Command.
   */
  command!: Command

  /**
   * Command string.
   */
  commandString!: string

  /**
   * Args.
   */
  args: ArgumentType[] = []

  /**
   * Args string.
   */
  argsString!: string

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: {
    message: Message
    prefix: string
    command: Command
    commandString: string
    args: ArgumentType[]
    argsString: string
  }) {
    this.message = data.message
    this.prefix = data.prefix
    this.command = data.command
    this.commandString = data.commandString
    this.args = data.args
    this.argsString = data.argsString
  }

  /**
   * Content.
   */
  get content() {
    return this.message.content
  }

  /**
   * Channel.
   */
  get channel() {
    return this.message.channel
  }

  /**
   * Author.
   */
  get author() {
    return this.message.author
  }
}
