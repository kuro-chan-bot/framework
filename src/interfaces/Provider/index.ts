import { HasBotContextInterface } from '../HasBotContext'

/*
 * Provider interface.
 */
export interface ProviderInterface extends HasBotContextInterface {
  /**
   * Name.
   */
  name: string

  /**
   * On register.
   */
  onRegister(): void

  /**
   * On boot.
   */
  onBoot(): void
}
