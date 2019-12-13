import { ArgumentType } from '../ArgumentType'
import { TranslateRequestInterface } from '../../interfaces'

/*
 * Argument definition.
 */
export type ArgumentDefinition = {
  name: string
  candidates?: () => any[]
  required?: boolean
  type?: ArgumentType
  description?: string | TranslateRequestInterface
}

/**
 * Compiled argument definition.
 */
export type CompiledArgumentDefinition = Required<ArgumentDefinition>
