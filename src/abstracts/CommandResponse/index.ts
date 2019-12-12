import { CommandResponseInterface } from '../../interfaces/CommandResponse'
import { CommandRequest } from '../../impls/CommandRequest'

export type CommandResponseOptions = {}

/*
 * Command response.
 */
export class CommandResponse implements CommandResponseInterface {
  /**
   * Constructor.
   *
   * @param options
   */
  constructor(private options?: CommandResponseOptions) {}

  /**
   * Dispatch.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch(request: CommandRequest) {}
}
