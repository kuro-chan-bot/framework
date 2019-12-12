import { ArgumentType } from '../ArgumentType'

/*
 * Argument definition.
 */
export type ArgumentDefinition = {
  name: string
  candidates?: () => any[]
  required?: boolean
  type?: ArgumentType
  description?: string
}

/**
 * Compiled argument definition.
 */
export type CompiledArgumentDefinition = Required<ArgumentDefinition>
