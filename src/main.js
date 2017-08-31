/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';
import App from './app';

require('./bootstrap');

new Vue(App).$mount('#app');
