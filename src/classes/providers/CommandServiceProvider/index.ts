import { Provider } from '../../../abstracts/Provider'
import { CommandService } from '../../services/CommandService'

export class CommandServiceProvider extends Provider {
  onBoot() {
    this.bot.registerListener(new CommandService())
  }
}
