<script lang="ts" setup>
import getSpotLights from "@/api/getSpotLights";
import type { SpotLight } from "@/api/types";
import { ref, onMounted } from "vue";
const spotlights = ref(Array<SpotLight>());

onMounted(async () => (spotlights.value = await getSpotLights()));
</script>

<template>
  <ul>
    <li v-for="spotlight in spotlights">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>
