import { Message } from 'discord.js'
import { ParseMessage } from '../../types/ParseMessage'

/**
 * Message parser interface.
 */
export interface MessageParserInterface {
  /**
   * Parse a message.
   *
   * @param message
   */
  parse(message: Message): ParseMessage | false
}
