/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import * as types from './mutation-types';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const login = ({ commit }, payload) => {
  commit(types.LOGIN, payload);
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
};

export default {
  check,
  login,
  logout,
};
