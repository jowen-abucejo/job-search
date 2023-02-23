<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

<template>
  <input
    placeholder="Software Engineer"
    class="w-full focus:outline-none"
    @input="handleInput"
  />
</template>
