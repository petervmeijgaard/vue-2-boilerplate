/* ============
 * Transformer
 * ============
 *
 * The base transformer.
 *
 * Transformers are used to transform the fetched data
 * to a more suitable format.
 * For instance, when the fetched data contains snake_cased values,
 * they will be camelCased.
 */

export default class Transformer {
  /**
   * Method used to transform a fetched collection.
   *
   * @param items The items to be transformed.
   *
   * @returns {Array} The transformed items.
   */
  static fetchCollection(items) {
    return items.map(item => this.fetch(item));
  }

  /**
   * Method used to transform a collection to be send.
   *
   * @param items The items to be transformed.
   *
   * @returns {Array} The transformed items.
   */
  static sendCollection(items) {
    return items.map(item => this.send(item));
  }
}
