import { TranslatorInterface } from '../../interfaces/Translator'
import { TranslateRequest } from '../TranslateRequest'
import { MargeObject } from '../../helpers'

/*
 * Translator
 */
export class Translator implements TranslatorInterface {
  /**
   * Language.
   */
  language = ''

  /**
   * Language set.
   */
  languageSet: any = {}

  /**
   * Constructor.
   *
   * @param languageSet
   * @param language
   */
  constructor(
    languageSet: any,
    language: string = Object.keys(languageSet)[0] || ''
  ) {
    this.language = language
    this.languageSet = languageSet
  }

  /**
   * Translate.
   *
   * @param pathOrRequest
   * @param data
   */
  translate(pathOrRequest: string | TranslateRequest, data?: any) {
    if (typeof pathOrRequest === 'string')
      return this.translatePath(pathOrRequest, data)
    return this.translateRequest(pathOrRequest)
  }

  /**
   * Returns languaged translator.
   *
   * @param language
   */
  languaged(language: string) {
    return new Translator(this.languageSet, language)
  }

  /**
   * Set language.
   *
   * @param language
   */
  setLanguage(language: string) {
    this.language = language
  }

  /**
   * Include language set.
   *
   * @param languageSet
   */
  include(languageSet: any) {
    this.languageSet = MargeObject(this.languageSet, languageSet)
  }

  /**
   * Translate path.
   *
   * @param path
   * @param data
   */
  private translatePath(path: string, data?: any) {
    let set = this.getLanguageSet()

    if (typeof set === 'undefined') return path
    if (typeof set[path] === 'string')
      return this.compileContent(set[path], data)

    const paths = this.parsePath(path)

    for (const path of paths) {
      if (typeof set[path] === 'undefined') return path
      set = set[path]
    }

    if (typeof set === 'string') {
      return this.compileContent(set, data)
    }

    return path
  }

  /**
   * Translate request.
   *
   * @param request
   */
  private translateRequest(request: TranslateRequest) {
    return this.translatePath(request.path, request.data)
  }

  /**
   * Parse path.
   *
   * @param path
   */
  private parsePath(path: string) {
    return path.split('.')
  }

  /**
   * Get language set.
   */
  private getLanguageSet() {
    return this.languageSet[this.language]
  }

  /**
   * Compile content.
   *
   * @param content
   * @param data
   */
  private compileContent(content: string, data?: any) {
    if (data) {
      Object.keys(data).forEach(key => {
        content = content.replace(`{${key}}`, data[key])
      })
    }

    return content
  }
}
