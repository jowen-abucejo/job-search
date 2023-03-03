<script>
import getSpotLights from "@/api/getSpotLights";
export default {
  name: "SpotLight",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    this.spotlights = await getSpotLights();
  },
};
</script>

<template>
  <ul>
    <li v-for="spotlight in spotlights">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>
