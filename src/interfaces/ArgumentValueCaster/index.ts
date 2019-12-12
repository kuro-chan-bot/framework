import { ArgumentType } from '../../types/ArgumentType'

/*
 * Argument value caster interface.
 */
export interface ArgumentValueCasterInterface {
  /**
   * Cast.
   */
  cast<Type = any>(value: string, type: ArgumentType): Type
}
