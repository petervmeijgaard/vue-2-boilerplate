<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */

  import store from './store';
  import { router } from './plugins/vue-router';
  import { i18n } from './plugins/vue-i18n';

  export default {
    /**
     * The name of the application.
     */
    name: 'vue-boilerplate',

    /**
     * The Vuex store.
     */
    store,

    /**
     * The router.
     */
    router,

    /**
     * The localization plugin.
     */
    i18n,

    /**
     * Fires when the app has been mounted.
     */
    mounted() {
      // If the user is authenticated,
      // fetch the data from the API
      if (this.$store.state.auth.authenticated) {
        this.$store.dispatch('account/find');
      }
    },
  };
</script>
