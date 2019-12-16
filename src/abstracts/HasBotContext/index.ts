import { HasBotContextInterface, BotContextInterface } from '../../interfaces'

/**
 * Has bot context.
 */
export class HasBotContext implements HasBotContextInterface {
  /**
   * Context.
   */
  context!: BotContextInterface

  /**
   * Set context.
   *
   * @param context
   */
  setContext(context: BotContextInterface) {
    this.context = context
  }

  /**
   * Bot.
   */
  get bot() {
    return this.context.bot
  }

  /**
   * Client.
   */
  get client() {
    return this.context.client
  }
}
