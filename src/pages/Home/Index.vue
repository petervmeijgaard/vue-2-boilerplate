<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Welcome!
      </span>
      <div slot="body">
        <p>
          Get started with the Vue 2 boilerplate
        </p>
        <p>
          For questions, contact me:
        </p>
        <p>
          <a
            class="btn btn-outline-primary"
            href="http://gitter.im/petervmeijgaard"
            target="_blank"
          >
            <i
              class="fa fa-github fa-fw"
              aria-hidden="true"
            ></i>
            <span class="pl-2">
              Gitter
            </span>
          </a>
          <a
            class="btn btn-outline-primary"
            href="http://github.com/petervmeijgaard"
            target="_blank"
          >
            <i
              class="fa fa-github fa-fw"
              aria-hidden="true"
            ></i>
            <span class="pl-2">
              GitHub
            </span>
          </a>
          <a
            class="btn btn-outline-primary"
            href="http://twitter.com/petervmeijgaard"
            target="_blank"
          >
            <i class="fa fa-twitter fa-fw" aria-hidden="true"></i>
            <span class="pl-2">
              Twitter
            </span>
          </a>
        </p>
        <p>
          For bugs, see:
        </p>
        <a
          class="btn btn-outline-primary"
          href="https://github.com/petervmeijgaard/vue-2.0-boilerplate/issues"
          target="_blank"
        >
          <i class="fa fa-github fa-fw" aria-hidden="true"></i>
          <span class="pl-2">
            GitHub
          </span>
        </a>
      </div>
      <div slot="footer">
        Made with love by Vivid Web
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
