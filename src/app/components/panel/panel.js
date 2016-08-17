/* ============
 * Panel Component
 * ============
 *
 * A basic panel component.
 *
 * Gives an idea how components work.
 */

import slotMixin from './../../mixins/slot';

export default {
  mixins: [
    slotMixin,
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
