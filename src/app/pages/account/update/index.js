/* ============
 * Account Update Page
 * ============
 *
 * Page where the user can update the account information
 */
import accountService from '../../../services/account'
import store from '../../../store/modules/account'


export default {
  computed: {
    account: {
      get () {
        return store.state;
      },
      set (account) {
        accountService.update(account);
      }
    }
  },
  methods: {
    updateAccount(e) {
      // for more complex forms: https://github.com/defunctzombie/form-serialize
      var data = {};
      var inputs = [].slice.call(e.target.getElementsByTagName('input'));
      inputs.forEach(input => {
        data[input.name] = input.value;
      });
      accountService.update(data);
    },
  },
  components: {
    VLayout: require('layouts/default/default.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
