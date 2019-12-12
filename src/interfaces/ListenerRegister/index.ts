import { ListenerInterface } from '../Listener'
import { RegisterInterface } from '../Register'

/*
 * Listener register interface.
 */
export interface ListenerRegisterInterface
  extends RegisterInterface<ListenerInterface> {
  /**
   * Register.
   *
   * @param listener
   */
  register(listener: ListenerInterface): this
}
