import {
  GET_ACCOUNT,
  UPDATE_ACCOUNT,
} from './../../mutation-types';

export default {
  [GET_ACCOUNT](state, account) {
    state.email = account.email;
    state.firstName = account.firstName;
    state.lastName = account.lastName;
  },

  [UPDATE_ACCOUNT](state, account) {
    state.email = account.email;
    state.firstName = account.firstName;
    state.lastName = account.lastName;
  },
};
