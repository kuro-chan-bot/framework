import { BotInterface } from '../Bot'
import { Client } from 'discord.js'

/*
 * Bot context interface.
 */
export interface BotContextInterface {
  /**
   * Bot.
   */
  bot: BotInterface

  /**
   * Client.
   */
  client: Client
}
