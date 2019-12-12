import { Message, User, Channel } from 'discord.js'
import { Command } from '../../abstracts/Command'
import { ArgumentType } from '../../types/ArgumentType'

/*
 * Command request interface.
 */
export interface CommandRequestInterface {
  /**
   * Message.
   */
  message: Message

  /**
   * Content.
   */
  content: string

  /**
   * Channel.
   */
  channel: Channel

  /**
   * Author.
   */
  author: User

  /**
   * Command.
   */
  command: Command

  /**
   * Args.
   */
  args: ArgumentType[]

  /**
   * Args string.
   */
  argsString: string

  /**
   * Prefix.
   */
  prefix: string

  /**
   * Command string.
   */
  commandString: string
}
