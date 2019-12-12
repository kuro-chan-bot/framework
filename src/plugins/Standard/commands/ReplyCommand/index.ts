import { Command } from '../../../../abstracts/Command'

export class ReplyCommand extends Command {
  /**
   * Name.
   */
  readonly name = 'reply'

  /**
   * Description.
   */
  readonly description = 'Reply arguments.'

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
}
