<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const handleInput = ($event) => emits("update:modelValue", $event.target.value);
</script>

<template>
  <input class="w-full focus:outline-none" @input="handleInput" />
</template>
