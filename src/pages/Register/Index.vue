<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Register
      </span>
      <div slot="body">
        <form @submit.prevent="register(user)">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input
                v-model="user.firstName"
                type="text"
                placeholder="First name"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input
                v-model="user.lastName"
                type="text"
                placeholder="Last name"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-envelope fa-fw"></i>
              </div>
              <input
                v-model="user.email"
                type="email"
                placeholder="Email"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-lock fa-fw"></i>
              </div>
              <input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-lock fa-fw"></i>
              </div>
              <input
                v-model="user.passwordConfirm"
                type="password"
                placeholder="Confirm password"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-primary">
              Register
            </button>
          </div>
        </form>
      </div>
      <div slot="footer">
        Already got an account?
        <router-link :to="{ name: 'login.index' }">Login</router-link>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Register Index Page
   * ============
   *
   * Page where the user can register.
   */

  import VLayout from '@/layouts/Minimal';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'register-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
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

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will register the user.
       *
       * @param {Object} user The user to be registered.
       */
      register(user) {
        this.$store.dispatch('auth/register', user);
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
