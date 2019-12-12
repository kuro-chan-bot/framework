import {
  CommandResponse,
  CommandResponseOptions
} from '../../../abstracts/CommandResponse'
import { CommandRequest } from '../../../impls/CommandRequest'

/**
 * Send response.
 */
export class SendResponse extends CommandResponse {
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
    request.message.channel.send(this.message)
  }
}
