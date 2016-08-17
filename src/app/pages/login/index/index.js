/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login
 */

import authService from './../../../services/auth';
import loader from './../../../utils/loader';

export default {

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },

  methods: {
    login(user) {
      authService.login(user);
    },
  },

  components: {
    VLayout: loader.layout('minimal'),
  },
};
