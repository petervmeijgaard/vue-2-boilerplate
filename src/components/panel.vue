<template>
  <div :class="classNames">
    <div class="panel-heading" v-if="hasSlot('heading')">
      <slot name="heading"></slot>
    </div>
    <div class="panel-body" v-if="hasSlot('body')">
      <slot name="body"></slot>
    </div>
    <div class="panel-footer" v-if="hasSlot('footer')">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  /* ============
   * Panel Component
   * ============
   *
   * A basic panel component.
   *
   * Gives an idea how components work.
   */

  import SlotMixin from '@/mixins/slot';

  export default {
    mixins: [
      SlotMixin,
    ],
    props: {
      contextualStyle: {
        type: String,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['panel'];

        if (this.contextualStyle) {
          classNames.push(`panel-${this.contextualStyle}`);
        } else {
          classNames.push('panel-default');
        }

        return classNames;
      },
    },
  };

</script>
