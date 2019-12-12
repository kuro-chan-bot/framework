/**
 * Kuro framework error.
 */
export class KuroFrameworkError extends Error {
  /**
   * Error.
   */
  name = 'KuroFrameworkError'

  /**
   * Consturctor.
   *
   * @param message
   */
  constructor(message: string) {
    super(message)
  }

  /**
   * To string.
   */
  toString() {
    return `[kuro-framework] ${this.message}`
  }
}
