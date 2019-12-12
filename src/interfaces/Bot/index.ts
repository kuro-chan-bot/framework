import { ProviderInterface } from '../Provider'
import { ListenerInterface } from '../Listener'
import { CommandInterface } from '../Command'
import { HasBotContextInterface } from '../HasBotContext'
import { EventEmitter } from 'events'
import { RegisterableInterface } from '../Registerable'
import { RegisterInterface } from '../Register'
import { LoggerInterface } from '../Logger'
import { Prefix } from '../../types/Prefix'
import { ClientUser } from 'discord.js'
import { Translator } from '../../impls/Translator'
import { InstallableInterface } from '../Installable'

/*
 * Bot interface.
 */
export interface BotInterface
  extends ListenerInterface,
    HasBotContextInterface {
  /**
   * Event emitter.
   */
  readonly eventEmitter: EventEmitter

  /**
   * Prefixes.
   */
  prefixes: Prefix[]

  /**
   * Providers.
   */
  providers: ProviderInterface[]

  /**
   * Commands.
   */
  commands: CommandInterface[]

  /**
   * Listeners.
   */
  listeners: ListenerInterface[]

  /**
   * Loggers.
   */
  loggers: LoggerInterface[]

  /**
   * Translator.
   */
  translator: Translator

  /**
   * Bot name.
   */
  name: string

  /**
   * Version string.
   */
  versionString: string

  /**
   * Beta version flag.
   */
  isBetaVersion: boolean

  /**
   * Color.
   */
  color: string

  /**
   * Me.
   */
  me: ClientUser

  /**
   * Plugins.
   */
  plugins: InstallableInterface[]

  /**
   * Login.
   */
  login(token: string): void

  /**
   * Install a plugin.
   *
   * @param installable
   */
  install(installable: InstallableInterface): void

  /**
   * Register.
   *
   * @param register
   * @param registerables
   */
  register<Registerable extends RegisterableInterface>(
    register: RegisterInterface<Registerable>,
    registerables: Registerable[]
  ): void

  /**
   * Register a listener.
   *
   * @param listener
   */
  registerListener(listener: ListenerInterface): void

  /**
   * Register a provider.
   *
   * @param provider
   */
  registerProvider(provider: ProviderInterface): void

  /**
   * Add a logger.
   *
   * @param logger
   */
  addLogger(logger: LoggerInterface): void

  /**
   * Add a command.
   *
   * @param command
   */
  addCommand(command: CommandInterface): void

  /**
   * Log.
   *
   * @param object
   */
  log(object: any): void

  /**
   * Info.
   *
   * @param object
   */
  info(object: any): void

  /**
   * Success.
   *
   * @param object
   */
  success(object: any): void

  /**
   * Warn.
   *
   * @param object
   */
  warn(object: any): void

  /**
   * Error.
   *
   * @param object
   */
  error(object: any): void
}
