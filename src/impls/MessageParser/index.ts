import { MessageParserInterface } from '../../interfaces/MessageParser'
import { Message } from 'discord.js'
import { Prefix } from '../../types/Prefix'

/*
 * Message parser.
 */
export class MessageParser implements MessageParserInterface {
  /**
   * Command demiliter.
   */
  commandDemiliter = / |\n/

  /**
   * Message parser constructor.
   *
   * @param prefixes
   */
  constructor(private prefixes: Prefix[]) {}

  /**
   * Parse a message.
   *
   * @param message
   */
  parse(message: Message) {
    const prefix = this.getPrefixString(message.content)
    if (!prefix) return false
    const contentChars = message.content.split('')
    const indexToCommand = contentChars.findIndex(char => char === ' ')
    const commandString = message.content.slice(0, indexToCommand)
    const argsString = message.content.slice(indexToCommand + 1)

    return {
      message,
      prefix,
      commandString,
      argsString
    }
  }

  /**
   * Get prefix string.
   *
   * @param content
   */
  getPrefixString(content: string) {
    for (const prefix of this.prefixes) {
      if (typeof prefix === 'string' && content.startsWith(prefix))
        return prefix

      if (prefix instanceof RegExp) {
        const matches = content.match(prefix)
        if (matches) return matches[0]
      }
    }
  }
}
