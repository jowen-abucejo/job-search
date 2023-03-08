<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const handleInput = ($event: any) =>
  emits("update:modelValue", $event.target.value);
</script>

<template>
  <input class="w-full focus:outline-none" @input="handleInput" />
</template>
