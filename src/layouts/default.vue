<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link
            class="navbar-brand"
            :to="{ name: 'home.index' }"
          >
            My App
          </router-link>
        </div>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav">
            <router-link
              :to="{ name: 'home.index' }"
              active-class="active"
              class="nav-item"
              tag="li"
            >
              <a>
                Home
              </a>
            </router-link>
          </ul>
          <ul class="nav navbar-nav">
            <router-link
              :to="{ name: 'account.index' }"
              active-class="active"
              class="nav-item"
              tag="li"
            >
              <a>
                Account
              </a>
            </router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#" @click.prevent="logout">
                <i class="fa fa-sign-out"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Content will be placed here -->
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  import authService from '@/services/auth';

  export default {
    methods: {
      logout() {
        authService.logout();
      },
    },
  };

</script>
