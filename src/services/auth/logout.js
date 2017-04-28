import Vue from 'vue';
import store from './../../store';

export default () => {
  store.dispatch('auth/logout');
  Vue.router.push({
    name: 'login.index',
  });
};
