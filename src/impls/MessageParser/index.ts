import { MessageParserInterface } from '../../interfaces/MessageParser'
import { Message } from 'discord.js'
import { Prefix } from '../../types/Prefix'

/*
 * Message parser.
 */
export class MessageParser implements MessageParserInterface {
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

    return {
      message,
      prefix,
      commandString: message.content.slice(prefix.length).split(' ')[0],
      argsString:
        message.content.indexOf(' ') < 0
          ? ''
          : message.content.slice(message.content.indexOf(' ') + 1)
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
