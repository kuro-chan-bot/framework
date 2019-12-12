import { RegisterableInterface } from '../Registerable'

/*
 * REgister interface.
 */
export interface RegisterInterface<Type extends RegisterableInterface> {
  /**
   * Register.
   *
   * @param value
   */
  register(value: Type): void
}
