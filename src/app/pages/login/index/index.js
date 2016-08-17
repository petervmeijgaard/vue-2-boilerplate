/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login
 */

import loader from "./../../../utils/loader";

export default {

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },

  components: {
    VLayout: loader.layout('minimal'),
  },
};
