import { BuilderInterface } from '../../../interfaces/Builder'
import { BotContextInterface } from '../../../interfaces/BotContext'
import { BotInterface } from '../../../interfaces/Bot'
import { Client } from 'discord.js'

/*
 *
 */
export class BotContextBuilder
  implements BuilderInterface<BotContextInterface> {
  /**
   * Context.
   */
  private context: Partial<BotContextInterface> = {}

  /**
   * Set bot.
   *
   * @param bot
   */
  setBot(bot: BotInterface) {
    this.context.bot = bot
    return this
  }

  /**
   * Set client.
   *
   * @param client
   */
  setClient(client: Client) {
    this.context.client = client
    return this
  }

  /**
   * Build.
   */
  build() {
    return this.context as BotContextInterface
  }
}
