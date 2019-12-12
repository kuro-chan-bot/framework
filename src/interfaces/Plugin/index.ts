import { InstallableInterface } from '../Installable'
import { ProviderInterface } from '../Provider'
import { CommandInterface } from '../Command'
import { ListenerInterface } from '../Listener'
import { LoggerInterface } from '../Logger'

/*
 * Plugin interface.
 */
export interface PluginInterface extends InstallableInterface {
  /**
   * Providers.
   */
  providers: ProviderInterface[]

  /**
   * Commands.
   */
  commands: CommandInterface[]

  /**
   * Listners.
   */
  listeners: ListenerInterface[]

  /**
   * Loggers.
   */
  loggers: LoggerInterface[]

  /**
   * Language set.
   */
  languageSet: any
}
