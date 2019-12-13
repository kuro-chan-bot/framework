import {
  ArgumentDefinition,
  CompiledArgumentDefinition
} from '../../types/ArgumentDefinition'
import { CommandRequestInterface } from '../CommandRequest'
import { VoidOrType } from '../../types/VoidOrType'
import { PromiseOrType } from '../../types/PromiseOrType'
import { CommandResponseInterface } from '../CommandResponse'
import { HasBotContextInterface } from '../HasBotContext'
import { ParseMessage } from '../../types/ParseMessage'
import { TranslateRequestInterface } from '../TranslateRequest'

/*
 * Command interface.
 */
export interface CommandInterface extends HasBotContextInterface {
  /**
   * Name.
   */
  name: string

  /**
   * Description.
   */
  description: string | TranslateRequestInterface

  /**
   * Aliases.
   */
  aliases: string[]

  /**
   * Arguments definitions.
   */
  args: ArgumentDefinition[]

  /**
   * Single argument flag.
   */
  singleArg: boolean

  /**
   * Compiled args.
   */
  compiledArgs: CompiledArgumentDefinition[]

  /**
   * Run.
   */
  run(
    args: any[],
    request: CommandRequestInterface
  ): VoidOrType<PromiseOrType<CommandResponseInterface>>

  /**
   * Pipe.
   *
   * @param args
   */
  pipe(args: any[], message?: ParseMessage): any[]
}
