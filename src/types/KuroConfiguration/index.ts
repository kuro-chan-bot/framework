import { Prefix } from '../Prefix'
import {
  ProviderInterface,
  CommandInterface,
  ListenerInterface,
  InstallableInterface,
  LoggerInterface
} from '../../interfaces'
import { ClientOptions } from 'discord.js'

/**
 * Kuro configuration.
 */
export type KuroConfiguration = {
  /**
   * Prefixes.
   */
  prefixes?: Prefix[]

  /**
   * Providers.
   */
  providers?: ProviderInterface[]

  /**
   * Commands.
   */
  commands?: CommandInterface[]

  /**
   * Listeners.
   */
  listeners?: ListenerInterface[]

  /**
   * Loggers.
   */
  loggers?: LoggerInterface[]

  /**
   * Plugins.
   */
  plugins?: InstallableInterface[]

  /**
   * Color.
   */
  color?: string

  /**
   * Name.
   */
  name?: string

  /**
   * Version string.
   */
  versionString?: string

  /**
   * Is beta version flag.
   */
  isBetaVersion?: boolean

  /**
   * Discord.js client options.
   */
  discordJsClientOptions?: ClientOptions
}
