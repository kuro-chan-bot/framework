import {
  CommandResponse,
  CommandResponseOptions
} from '../../../abstracts/CommandResponse'
import { CommandRequest } from '../../../impls/CommandRequest'

/**
 * Reply response.
 */
export class ReplyResponse extends CommandResponse {
  /**
   * Constructor.
   *
   * @param message
   */
  constructor(private message: any, options?: CommandResponseOptions) {
    super(options)
  }

  /**
   * Dispatch.
   *
   * @param request
   */
  dispatch(request: CommandRequest) {
    request.message.reply(this.message)
  }
}
