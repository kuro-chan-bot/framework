import { TranslateRequestInterface } from '../../interfaces/TranslateRequest'

/*
 * Translate request.
 */
export class TranslateRequest implements TranslateRequestInterface {
  /**
   * Constructor.
   *
   * @param path
   * @param data
   */
  constructor(public path: string, public data: any) {}
}
