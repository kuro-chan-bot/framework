import { RegisterInterface } from '../../../interfaces/Register'
import { ProviderInterface } from '../../../interfaces/Provider'
import { BotInterface } from '../../../interfaces/Bot'

/*
 * Provider register.
 */
export class ProviderRegister implements RegisterInterface<ProviderInterface> {
  /**
   * Provier register constructor.
   *
   * @param bot
   */
  constructor(private bot: BotInterface) {}

  /**
   * Register.
   *
   * @param provider
   */
  register(provider: ProviderInterface) {
    provider.setContext(this.bot.context)
    provider.onRegister()

    return this
  }
}
