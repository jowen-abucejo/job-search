<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: "primary",
    validator(value: string) {
      return ["primary", "secondary"].includes(value);
    },
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button :class="color">
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
