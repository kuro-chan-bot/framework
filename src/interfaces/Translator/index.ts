import { TranslateRequestInterface } from '../TranslateRequest'

/*
 * Translator interface.
 */
export interface TranslatorInterface {
  /**
   * Language.
   */
  language: string

  /**
   * Language set.
   */
  languageSet: any

  /**
   * Translate.
   *
   * @param path
   * @param data
   */
  translate(path: string, data: any): string

  /**
   * Translate.
   *
   * @param request
   */
  translate(request: TranslateRequestInterface): string

  /**
   * Returns a languaged translator.
   *
   * @param language
   */
  languaged(language: string): TranslatorInterface

  /**
   * Include languages.
   *
   * @param languageSet
   */
  include(languageSet: any): void
}
