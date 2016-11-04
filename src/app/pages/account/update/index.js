/* ============
 * Account Index Page
 * ============
 *
 * Page where the user can view the account information
 */
import accountService from '../../../services/account'


export default {
 data() {
    return {
      user: this.$store.state.account
    }
  },
  methods: {
    update(user) {
      accountService.update(user);
    },
  },
  components: {
    VLayout: require('layouts/default/default.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
