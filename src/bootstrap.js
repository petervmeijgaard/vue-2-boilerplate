/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application
 */


/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';


/* ============
 * Vue Resource
 * ============
 *
 * The plugin for Vue.js provides services for making web requests and handle
 * responses using a XMLHttpRequest or JSONP.
 *
 * https://github.com/vuejs/vue-resource/tree/master/docs
 */
import VueResource from 'vue-resource';
import authService from './app/services/auth';

Vue.use(VueResource);

Vue.http.headers.common.Accept = 'application/json';
Vue.http.options.root = process.env.API_LOCATION;
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // When the token is invalid, log the user out
    if (response.status === 401) {
      authService.logout();
    }
  });
});


/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
import VuexRouterSync from 'vuex-router-sync';
import store from './app/store';

store.dispatch('checkAuthentication');


/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from 'vue-router';
import routes from './app/routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});
router.beforeEach((route, redirect, next) => {
  if (route.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the login page
     */
    redirect({
      name: 'login.index',
    });
  } else if (route.matched.some(m => m.meta.guest) && store.state.auth.authenticated) {
    /*
     * If the user is authenticated and visits
     * an guest page, redirect to the dashboard page
     */
    redirect({
      name: 'account.show',
    });
  } else {
    next();
  }
});
VuexRouterSync.sync(store, router);

Vue.router = router;


/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 *
 * http://jquery.com/
 */
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;


/* ============
 * Bootstrap
 * ============
 *
 * Require bootstrap for the app
 *
 * http://getbootstrap.com/
 */
require('bootstrap');
require('bootstrap/less/bootstrap.less');


/* ============
 * Font Awesome
 * ============
 *
 * Require font-awesome for the app
 *
 * http://http://fontawesome.io/
 */
require('font-awesome/less/font-awesome.less');


/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 * Stylus is used for this boilerplate.
 *
 * If you don't want to use Stylus, that's fine!
 * Replace the stylus directory with the CSS preprocessor you want.
 * Require the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 * http://stylus-lang.com/
 */
require('./assets/stylus/app.styl');

export default {
  router,
};
