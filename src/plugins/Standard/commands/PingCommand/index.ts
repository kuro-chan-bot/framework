import { Command } from '../../../../abstracts/Command'
import { ParseMessage } from '../../../../types/ParseMessage'

/**
 * Ping command.
 */
export class PingCommand extends Command {
  /**
   * Name.
   */
  name = 'ping'

  /**
   * Description.
   */
  description = 'Measure ping.'

  /**
   * Run.
   */
  run() {
    return this.reply(`Ping: ${this.context.client.ping} ms.`)
  }

  /**
   * Pipe.
   *
   * @param args
   * @param param1
   */
  pipe(args: any[], { message: { createdTimestamp } }: ParseMessage) {
    return [this.getPing(createdTimestamp)]
  }

  /**
   * Get ping.
   *
   * @param timestamp
   */
  getPing(timestamp: number) {
    return Date.now() - timestamp
  }
}
