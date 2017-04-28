/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account.
 */

import Transformer from './transformer';

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account
   *
   * @param account The fetched account
   *
   * @returns {Object} The transformed account
   */
  static fetch(account) {
    return {
      email: account.email,
      firstName: account.first_name,
      lastName: account.last_name,
    };
  }

  /**
   * Method used to transform a send account
   *
   * @param account The account to be send
   *
   * @returns {Object} The transformed account
   */
  static send(account) {
    return {
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName,
    };
  }
}
