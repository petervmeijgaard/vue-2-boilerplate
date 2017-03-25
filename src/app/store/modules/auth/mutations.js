import Vue from 'vue';
import {
  LOGOUT,
  CHECK_AUTHENTICATION,
  LOGIN,
} from './../../mutation-types';

export default {
  [CHECK_AUTHENTICATION](state) {
    state.authenticated = !!localStorage.getItem('id_token');
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
    }
  },

  [LOGIN](state, token) {
    state.authenticated = true;
    localStorage.setItem('id_token', token);
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem('id_token');
    Vue.$http.defaults.headers.common.Authorization = '';
  },
};
