import { BotContextInterface } from '../BotContext'

/*
 * Has bot context interface.
 */
export interface HasBotContextInterface {
  /**
   * Context.
   */
  context: BotContextInterface

  /**
   * Set context.
   */
  setContext(context: BotContextInterface): void
}
