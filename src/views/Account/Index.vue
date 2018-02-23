<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        My Account
      </span>
      <div slot="body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                First Name
              </th>
              <th>
                Last Name
              </th>
              <th>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ $store.state.account.firstName }}
              </td>
              <td>
                {{ $store.state.account.lastName }}
              </td>
              <td>
                {{ $store.state.account.email }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
        Made with love by Vivid Web
      </div>
    </v-card>
  </v-layout>
</template>

<script>
/* ============
 * Account Index Page
 * ============
 *
 * Page where the user can view the account information.
 */

import VLayout from '@/layouts/Default.vue';
import VCard from '@/components/Card.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'AccountIndex',

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
  },
};
</script>
