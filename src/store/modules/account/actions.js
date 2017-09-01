/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import * as types from './mutation-types';
import Transformer from '@/transformers/AccountTransformer';

export const find = ({ commit }) => {
  /*
   * Normally you would use a proxy to fetch the account:
   *
   * proxy
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response));
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  const account = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'jonh@doe.com',
  };

  commit(types.FIND, Transformer.fetch(account));
};

export default {
  find,
};
