<script>
export default {
  name: "SubNav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>

<template>
  <div
    v-if="onJobResultsPage"
    class="h-16 w-full border-b border-solid bg-white"
  >
    <div class="flex h-full w-full items-center px-8">
      <div>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-green-700">1643</span> Jobs matched</span>
      </div>
    </div>
  </div>
</template>
