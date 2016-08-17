export default {
  methods: {
    hasSlot(slotName) {
      return !!this.$slots[slotName];
    },
  },
};
