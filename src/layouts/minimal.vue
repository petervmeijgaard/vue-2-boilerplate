<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-6">
        <!-- Content will be placed here -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  /* ============
   * Minimal Layout
   * ============
   *
   * Used for the register and login pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {
    /**
     * The name of the layout.
     */
    name: 'minimal-layout',
  };
</script>
