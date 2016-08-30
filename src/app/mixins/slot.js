export default {
  methods: {
    /**
     * Method used to check if a Vue component has a slot
     *
     * @param slotName The name of the slot
     * @returns {boolean} Whether the component has a slot
     */
    hasSlot(slotName = 'default') {
      return !!this.$slots[slotName];
    },
  },
};
