import { Message } from 'discord.js'

/**
 * Parse message.
 */
export type ParseMessage = {
  message: Message
  prefix: string
  commandString: string
  argsString: string
}
