import { ProviderInterface } from '../../interfaces/Provider'
import { BotContextInterface } from '../../interfaces/BotContext'
import { HasBotContext } from '../HasBotContext'

/*
 * Provider abstract.
 */
export abstract class Provider extends HasBotContext
  implements ProviderInterface {
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
