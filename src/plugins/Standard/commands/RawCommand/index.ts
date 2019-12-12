import { Command } from '../../../../abstracts/Command'

/**
 * Raw command.
 */
export class RawCommand extends Command {
  /**
   * Name.
   */
  readonly name = 'raw'

  /**
   * Description.
   */
  readonly description = 'Return raw arguments.'

  /**
   * Single arg flag.
   */
  readonly singleArg = true

  /**
   * Run.
   *
   * @param args
   */
  run(args: any[]) {
    return this.reply(args.join(' '))
  }

  /**
   * Pipe.
   *
   * @param args
   */
  pipe(args: any[]) {
    return args
  }
}
