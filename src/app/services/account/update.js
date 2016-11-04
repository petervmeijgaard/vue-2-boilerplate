import Vue from 'vue';
import store from './../../store';
import { updateAccount } from './../../store/actions';

// When the request succeeds
const success = (account) => {
  // store.dispatch('login', token);
  updateAccount(store, account);

  Vue.router.push({
    name: 'account.index',
  });
};

// When the request fails
const failed = () => {
};

export default (account) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With Vue Resource, you can do something like this:
   * Vue.http.patch('account/update', account)
   *   .then((res) => {
   *     success(res);
   *   }, (res) => {
   *     failed(res);
   *   });
   */
  if (!account.email || !account.firstName || !account.lastName) {
    failed();
  } else {
    success(account);
  }
};
