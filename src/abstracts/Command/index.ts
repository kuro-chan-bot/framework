import { CommandInterface } from '../../interfaces/Command'
import {
  ArgumentDefinition,
  CompiledArgumentDefinition
} from '../../types/ArgumentDefinition'
import { CommandRequestInterface } from '../../interfaces/CommandRequest'
import { VoidOrType } from '../../types/VoidOrType'
import { PromiseOrType } from '../../types/PromiseOrType'
import { CommandResponseInterface } from '../../interfaces/CommandResponse'
import { ReplyResponse } from '../../classes/responses/ReplyResponse'
import { ErrorResponse } from '../../classes/responses/ErrorResponse'
import { ArgumentType } from '../../types/ArgumentType'
import { ParseMessage } from '../../types/ParseMessage'
import { TranslateRequestInterface } from '../../interfaces'
import { HasBotContext } from '../HasBotContext'

/*
 * Command.
 */
export abstract class Command extends HasBotContext
  implements CommandInterface {
  /**
   * Name.
   */
  name: string = this.constructor.name

  /**
   * Description.
   */
  description: string | TranslateRequestInterface = ''

  /**
   * Aliases.
   */
  aliases: string[] = []

  /**
   * Arguments definitions.
   */
  args: ArgumentDefinition[] = []

  /**
   * Single argument flag.
   */
  singleArg = false

  /**
   * Bot.
   */
  get bot() {
    return this.context.bot
  }

  /**
   * Compiled args.
   */
  get compiledArgs() {
    let compiledArgs: CompiledArgumentDefinition[] = []

    for (const arg of this.args) {
      const compiledArg: CompiledArgumentDefinition = {
        candidates: () => [],
        required: true,
        type: ArgumentType.Any,
        description: '',
        ...arg
      }

      compiledArgs.push(compiledArg)
    }

    return compiledArgs
  }

  /**
   * Run.
   *
   * @param request
   * @param args
   */
  abstract run(
    args: any[],
    request: CommandRequestInterface
  ): VoidOrType<PromiseOrType<CommandResponseInterface>>

  /**
   * Pipe.
   *
   * @param args
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pipe(args: any[], message?: ParseMessage): any[] {
    return []
  }

  /**
   * Reply.
   *
   * @param content
   */
  reply(content: any) {
    return new ReplyResponse(content)
  }

  /**
   * Error.
   *
   * @param content
   */
  error(content: any) {
    return new ErrorResponse(content)
  }
}
