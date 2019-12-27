import {
  ArgumentDefinition,
  CompiledArgumentDefinition
} from '../../types/ArgumentDefinition'
import { CommandRequestInterface } from '../CommandRequest'
import { HasBotContextInterface } from '../HasBotContext'
import { ParseMessage } from '../../types/ParseMessage'
import { TranslateRequestInterface } from '../TranslateRequest'
import { CommandRunResult } from '../../types/CommandRunResult'

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
  run(args: any[], request: CommandRequestInterface): CommandRunResult

  /**
   * Pipe.
   *
   * @param args
   */
  pipe(args: any[], message?: ParseMessage): any[]
}
