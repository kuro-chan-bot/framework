import { Logger } from '../../../../abstracts/Logger'
import colors from 'colors/safe'

/**
 * Console logger.
 */
export class ConsoleLogger extends Logger {
  /**
   * Log.
   *
   * @param object
   */
  log(object: any) {
    // eslint-disable-next-line no-console
    console.log(this.objectToString(object))
  }

  /**
   * Info.
   *
   * @param object
   */
  info(object: any) {
    // eslint-disable-next-line no-console
    console.log(this.prefix('ℹ', colors.blue) + this.objectToString(object))
  }

  /**
   * Success.
   *
   * @param object
   */
  success(object: any) {
    // eslint-disable-next-line no-console
    console.log(this.prefix('✔', colors.green) + this.objectToString(object))
  }

  /**
   * Warn.
   *
   * @param object
   */
  warn(object: any) {
    // eslint-disable-next-line no-console
    console.log(this.prefix('⚠', colors.yellow) + this.objectToString(object))
  }

  /**
   * Error.
   *
   * @param object
   */
  error(object: any) {
    // eslint-disable-next-line no-console
    console.log(this.prefix('!', colors.red) + this.objectToString(object))
  }

  /**
   * Create colored prefix.
   *
   * @param prefix
   * @param colorFn
   */
  private prefix(prefix: string, colorFn: (text: string) => string) {
    return colorFn(prefix) + ' '
  }

  /**
   * Object to string.
   *
   * @param object
   */
  private objectToString(object: any) {
    if (object instanceof Error) {
      return `${object.toString()}\n${object.stack}`
    }

    return '' + object
  }
}
