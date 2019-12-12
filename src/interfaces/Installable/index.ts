import { BotInterface } from '../Bot'

/*
 * Installable interface.
 */
export interface InstallableInterface {
  install(bot: BotInterface): void
}
