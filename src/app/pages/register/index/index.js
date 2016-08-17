/* ============
 * Register Index Page
 * ============
 *
 * Page where the user can register
 */

import loader from "./../../../utils/loader";

export default {

  data() {
    return {
      user: {
        email: null,
        passwordConfirm: null,
        password: null,
      },
    };
  },

  components: {
    VLayout: loader.layout('minimal'),
  },
};
