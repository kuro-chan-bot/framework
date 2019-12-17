import { BotInterface } from '../../interfaces/Bot'
import { ProviderInterface } from '../../interfaces/Provider'
import { Client } from 'discord.js'
import { ListenerRegister } from '../../classes/registers/ListenerRegister'
import { Listener } from '../../abstracts/Listener'
import { CommandInterface } from '../../interfaces/Command'
import { BotContextBuilder } from '../../classes/builders/BotContextBuilder'
import { ListenerInterface } from '../../interfaces/Listener'
import { ProviderRegister } from '../../classes/registers/ProviderRegister'
import { RegisterInterface } from '../../interfaces/Register'
import { RegisterableInterface } from '../../interfaces/Registerable'
import { LoggerInterface } from '../../interfaces/Logger'
import { Prefix } from '../../types/Prefix'
import { Translator } from '../Translator'
import { InstallableInterface } from '../../interfaces/Installable'
import { KuroConfiguration } from '../../types/KuroConfiguration'
import { CommandServiceProvider } from '../../classes'

/*
 * Bot class.
 */
export class Bot extends Listener implements BotInterface {
  /**
   * Event emitter.
   */
  get eventEmitter() {
    return this.client
  }

  /**
   * Prefixes.
   */
  prefixes: Prefix[] = []

  /**
   * Providers.
   */
  providers: ProviderInterface[] = []

  /**
   * Commands.
   */
  commands: CommandInterface[] = []

  /**
   * Listeners.
   */
  listeners: ListenerInterface[] = []

  /**
   * Loggers.
   */
  loggers: LoggerInterface[] = []

  /**
   * Plugins.
   */
  plugins: InstallableInterface[] = []

  /**
   * Translator.
   */
  translator: Translator = new Translator({}, 'en')

  /**
   * Color.
   */
  color = ''

  /**
   * Bot name.
   */
  name = this.constructor.name

  /**
   * Me.
   */
  get me() {
    return this.client.user
  }

  /**
   * Version string.
   */
  versionString = '0.0.0'

  /**
   * Is beta version.
   */
  isBetaVersion = false

  /**
   * Bot constructor.
   */
  constructor(configuration?: KuroConfiguration, initialize = true) {
    super()
    const client = new Client(
      configuration ? configuration.discordJsClientOptions : undefined
    )

    // Generate context.
    const contextBuilder = new BotContextBuilder()
    this.context = contextBuilder
      .setBot(this)
      .setClient(client)
      .build()

    if (configuration) {
      this.prefixes = configuration.prefixes || []
      this.providers = configuration.providers || []
      this.commands = configuration.commands || []
      this.listeners = configuration.listeners || []
      this.loggers = configuration.loggers || []
      this.plugins = configuration.plugins || []
      this.name = configuration.name || this.constructor.name
      this.versionString = configuration.versionString || '0.0.0'
      this.isBetaVersion = configuration.isBetaVersion || false
    }

    if (initialize) {
      this.initialize()
    }
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
   * Initialize.
   */
  protected initialize() {
    // Setup loggers.
    this.loggers.forEach(logger => logger.setContext(this.context))

    // Setup commands.
    this.commands.forEach(command => command.setContext(this.context))

    // Register listeners
    const listenerRegister = new ListenerRegister(this)
    listenerRegister.register(this)
    this.registerListeners(listenerRegister)

    // Register provider.
    const providerRegister = new ProviderRegister(this)
    this.registerProviders(providerRegister)

    // Install plugins.
    this.installPlugins()

    // Show warning, if prefixes is an empty array.
    if (this.prefixes.length === 0) {
      this.warn('prefixes is empty.')
    }

    // Show warning, if CommandServiceProvider is not provided.
    if (
      !this.providers.find(
        provider => provider instanceof CommandServiceProvider
      )
    ) {
      this.warn('CommandServiceProvider is not provided.')
    }
  }

  /**
   * Register listeners.
   *
   * @param register
   */
  private registerListeners(register: ListenerRegister) {
    this.register(register, this.listeners)
  }

  /**
   * Register providers.
   *
   * @param register
   */
  private registerProviders(register: ProviderRegister) {
    this.register(register, this.providers)
  }

  /**
   * Install a plugin.
   *
   * @param installable
   */
  install(installable: InstallableInterface) {
    installable.install(this)
  }

  /**
   * Install plugins.
   */
  private installPlugins() {
    for (const plugin of this.plugins) {
      this.install(plugin)
    }
  }

  /**
   * Register registerables.
   *
   * @param register
   * @param registerables
   */
  register<Registerable extends RegisterableInterface>(
    register: RegisterInterface<Registerable>,
    registerables: Registerable[]
  ) {
    for (const registerable of registerables) {
      register.register(registerable)
    }

    for (const registerable of registerables) {
      registerable.onBoot()
    }
  }

  /**
   * Register a listener.
   *
   * @param listener
   */
  registerListener(listener: ListenerInterface) {
    const register = new ListenerRegister(this)
    this.register(register, [listener])
  }

  /**
   * Register a provider.
   *
   * @param provider
   */
  registerProvider(provider: ProviderInterface) {
    const register = new ProviderRegister(this)
    this.register(register, [provider])
  }

  /**
   * Login.
   *
   * @param token
   */
  login(token: string) {
    this.client.login(token)
  }

  /**
   * Add a logger.
   *
   * @param logger
   */
  addLogger(logger: LoggerInterface) {
    this.loggers.push(logger)
  }

  /**
   * Add a command.
   *
   * @param command
   */
  addCommand(command: CommandInterface) {
    command.setContext(this.context)
    this.commands.push(command)
  }

  /**
   * Log.
   *
   * @param object
   */
  log(object: any) {
    this.loggerEach(logger => logger.log(object))
  }

  /**
   * Info.
   *
   * @param object
   */
  info(object: any) {
    this.loggerEach(logger => logger.info(object))
  }

  success(object: any) {
    this.loggerEach(logger => logger.success(object))
  }

  /**
   * Warn.
   *
   * @param object
   */
  warn(object: any) {
    this.loggerEach(logger => logger.warn(object))
  }

  /**
   * Error.
   *
   * @param object
   */
  error(object: any) {
    this.loggerEach(logger => logger.error(object))
  }

  /**
   * Logger each.
   *
   * @param callback
   */
  private loggerEach(callback: (logger: LoggerInterface) => void) {
    for (const logger of this.loggers) {
      callback(logger)
    }
  }
}
