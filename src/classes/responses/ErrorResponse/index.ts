import { CommandResponse } from '../../../abstracts/CommandResponse'
import { RichEmbed, Message } from 'discord.js'
import day from 'dayjs'

/**
 * Error response.
 */
export class ErrorResponse extends CommandResponse {
  /**
   * Constructor.
   *
   * @param message
   */
  constructor(private message: string) {
    super()
  }

  /**
   * Dispatch.
   *
   * @param request
   */
  dispatch(request: { message: Message }) {
    const embed = new RichEmbed()
    embed
      .setColor('#f44336')
      .setTitle(`Error: ${this.message}`)
      .setDescription(
        `\`\`\`css\n[${day().format('YYYY-MM-DD HH:mm:ss')}] Error: ${
          this.message
        }\n\`\`\``
      )
    request.message.reply(embed)
  }
}
