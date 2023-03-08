<script lang="ts" setup>
import { ref, computed } from "vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
});
const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() => {
  return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
});
</script>

<template>
  <div class="border-b border-solid border-gray-300 py-5">
    <div
      class="flex cursor-pointer flex-wrap items-center justify-between"
      @click="open"
      role="button"
    >
      <h3 class="text-base font-semibold">{{ title }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot><p>No content given!</p></slot>
    </div>
  </div>
</template>
