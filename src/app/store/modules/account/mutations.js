import {
  GET_ACCOUNT,
} from './../../mutation-types';

export default {
  [GET_ACCOUNT](state, account) {
    state.email = account.email;
    state.firstName = account.firstName;
    state.lastName = account.lastName;
  },
};
