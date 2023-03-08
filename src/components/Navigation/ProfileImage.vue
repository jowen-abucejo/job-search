<script lang="ts" setup>
defineProps({
  imageUrl: {
    type: String,
    require: true,
    default: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  },
  alt: {
    type: String,
    require: false,
    default: "Profile Image",
  },
  class: {
    type: String,
    required: false,
    default: "mx-8 h-8 w-8 rounded-3xl",
  },
});
</script>

<template>
  <img :src="imageUrl" :alt="alt" :class="class" />
</template>
