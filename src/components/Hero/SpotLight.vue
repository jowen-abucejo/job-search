<script setup>
import getSpotLights from "@/api/getSpotLights";
import { ref, onMounted } from "vue";
const spotlights = ref([]);

onMounted(async () => (spotlights.value = await getSpotLights()));
</script>

<template>
  <ul>
    <li v-for="spotlight in spotlights">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>
