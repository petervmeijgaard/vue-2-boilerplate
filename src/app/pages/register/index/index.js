/* ============
 * Register Index Page
 * ============
 *
 * Page where the user can register
 */

import authService from './../../../services/auth';

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
    VLayout: require('layouts/minimal/minimal.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
