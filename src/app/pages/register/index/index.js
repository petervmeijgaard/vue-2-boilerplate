/* ============
 * Register Index Page
 * ============
 *
 * Page where the user can register
 */

import authService from './../../../services/auth';
import loader from './../../../utils/loader';

export default {

  data() {
    return {
      user: {
        firstName: null,
        lastName: null,
        email: null,
        passwordConfirm: null,
        password: null,
      },
    };
  },

  methods: {
    register(user) {
      authService.register(user);
    },
  },

  components: {
    VLayout: loader.layout('minimal'),
    VPanel: loader.component('panel'),
  },
};
