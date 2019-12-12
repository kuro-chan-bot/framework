import { PromiseOrType } from '../../types/PromiseOrType'

/*
 * Builder interface.
 */
export interface BuilderInterface<Type> {
  /**
   * Build.
   */
  build(): PromiseOrType<Type>
}
