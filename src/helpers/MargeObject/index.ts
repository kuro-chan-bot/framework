/**
 * Marge object.
 *
 * @param objects
 */
export const MargeObject = (...objects: any[]) => {
  let result: any = {}

  for (const object of objects) {
    for (const [key, value] of Object.entries(object)) {
      if (typeof value === 'object') {
        result[key] = MargeObject(result[key] || {}, value)
      } else {
        result[key] = value
      }
    }
  }

  return result
}
