import { ProviderInterface } from '../../interfaces/Provider'
import { HasBotContextInterface } from '../../interfaces/HasBotContext'
import { BotContextInterface } from '../../interfaces/BotContext'

/*
 * Provider abstract.
 */
export abstract class Provider
  implements ProviderInterface, HasBotContextInterface {
  /**
   * Context.
   */
  context!: BotContextInterface

  /**
   * Bot.
   */
  get bot() {
    return this.context.bot
  }

  /**
   * Name.
   */
  get name() {
    return this.constructor.name
  }

  /**
   * On register.
   */
  onRegister() {}

  /**
   * On boot.
   */
  onBoot() {}

  /**
   * Set context.
   *
   * @param context
   */
  setContext(context: BotContextInterface) {
    this.context = context
  }
}
