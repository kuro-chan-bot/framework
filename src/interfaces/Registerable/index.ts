/*
 * Registerable interface.
 */
export interface RegisterableInterface {
  /**
   * On register.
   */
  onRegister(): void

  /**
   * On boot.
   */
  onBoot(): void
}
