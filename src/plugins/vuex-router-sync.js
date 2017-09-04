/* ============
 * Vuex Router Sync
 * ============
 *
 * Sync vue-router's current $route as part of vuex store's state.
 *
 * https://github.com/vuejs/vuex-router-sync
 */

import VuexRouterSync from 'vuex-router-sync';
import store from '@/store';
import { router } from './vue-router';

VuexRouterSync.sync(store, router);
