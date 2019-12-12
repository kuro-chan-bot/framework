import { CommandResponseInterface } from '../CommandResponse'

/*
 * Pipable command interface.
 */
export interface PipableCommandInterface<ArgType> {
  /**
   * Pipe.
   */
  pipe(arg: ArgType): CommandResponseInterface
}
