import { PluginInterface } from '../../interfaces/Plugin'
import { ProviderInterface } from '../../interfaces/Provider'
import { CommandInterface } from '../../interfaces/Command'
import { ListenerInterface } from '../../interfaces/Listener'
import { LoggerInterface } from '../../interfaces/Logger'
import { ListenerRegister } from '../../classes/registers/ListenerRegister'
import { ProviderRegister } from '../../classes/registers/ProviderRegister'
import { BotInterface } from '../../interfaces'

/*
 * Plugin.
 */
export class Plugin implements PluginInterface {
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
   * Include language set.
   */
  languageSet: any = {}

  /**
   * Install.
   *
   * @param bot
   */
  install(bot: BotInterface) {
    /**
     * Setup language set.
     */
    bot.translator.include(this.languageSet)

    /**
     * Add commands.
     */
    this.commands.forEach(command => bot.addCommand(command))

    /**
     * Register listeners.
     */
    const listenerRegister = new ListenerRegister(bot)
    bot.register(listenerRegister, this.listeners)

    /**
     * Register providers.
     */
    const providerRegister = new ProviderRegister(bot)
    bot.register(providerRegister, this.providers)

    /**
     * Add loggers.
     */
    this.loggers.forEach(logger => bot.addLogger(logger))
  }
}
