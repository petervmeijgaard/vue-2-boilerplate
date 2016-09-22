/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login
 */

import authService from './../../../services/auth';

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
    VLayout: require('layouts/minimal/minimal.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
