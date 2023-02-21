<script>
export default {
  name: "ActionButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].includes(value);
      },
    },
    color: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button :type="type" :class="color">
    {{ text }}
  </button>
</template>

<style scoped>
.primary {
  @apply border border-white bg-brand-purple-1 text-white;
}

.secondary {
  @apply border border-brand-purple-1 bg-white text-brand-purple-1 hover:border-white hover:bg-brand-purple-1 hover:text-white;
}
</style>
