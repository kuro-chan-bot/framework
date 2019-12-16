import { HasBotContextInterface } from '../HasBotContext'

/*
 * Logger interface.
 */
export interface LoggerInterface extends HasBotContextInterface {
  /**
   * Log.
   *
   * @param object
   */
  log(object: any): void

  /**
   * Info.
   *
   * @param object
   */
  info(object: any): void

  /**
   * Success.
   *
   * @param object
   */
  success(object: any): void

  /**
   * Warn.
   *
   * @param object
   */
  warn(object: any): void

  /**
   * Error.
   *
   * @param object
   */
  error(object: any): void
}
