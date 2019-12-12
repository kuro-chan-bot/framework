import { LoggerInterface } from '../../interfaces/Logger'

/*
 * Logger interface
 */
export class Logger implements LoggerInterface {
  /**
   * Log.
   *
   * @param object
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  log(object: any) {}

  /**
   * Info.
   *
   * @param object
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  info(object: any) {}

  /**
   * Success.
   *
   * @param object
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  success(object: any) {}

  /**
   * Warn.
   *
   * @param object
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  warn(object: any) {}

  /**
   * Error.
   *
   * @param object
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error(object: any) {}
}
