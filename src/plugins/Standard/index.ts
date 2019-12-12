import { HelpCommand } from './commands/HelpCommand'
import { PingCommand } from './commands/PingCommand'
import { RawCommand } from './commands/RawCommand'
import { ReplyCommand } from './commands/ReplyCommand'
import { Plugin } from '../../abstracts'
import { ConsoleLogger } from './loggers/ConsoleLogger'
import { BotInterface } from '../../interfaces'

/**
 * Standard plugin.
 */
export class StandardPlugin extends Plugin {
  /**
   * Commands.
   */
  commands = [
    new HelpCommand(),
    new PingCommand(),
    new RawCommand(),
    new ReplyCommand()
  ]

  /**
   * Loggers.
   */
  loggers = [new ConsoleLogger()]

  /**
   * Install.
   *
   * @param bot
   */
  install(bot: BotInterface) {
    super.install(bot)
    bot.info('Installed standard plugin.')
  }
}
