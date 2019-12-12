import { CommandRequestInterface } from '../CommandRequest'

/*
 * Command response interface.
 */
export interface CommandResponseInterface {
  /**
   * Dispatch.
   */
  dispatch(request: CommandRequestInterface): void
}
