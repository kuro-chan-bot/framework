import { TranslateRequest } from '../../impls/TranslateRequest'

/**
 * Create translate request.
 *
 * @param path
 * @param data
 */
export const t = (path: string, data: any = {}) =>
  new TranslateRequest(path, data)
