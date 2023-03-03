<script>
import { mapState } from "pinia";
import { useJobsStore, FILTERED_JOBS } from "@/stores/jobs";

export default {
  name: "SubNav",
  computed: {
    ...mapState(useJobsStore, [FILTERED_JOBS]),
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
        <span
          ><span class="text-green-700">{{ FILTERED_JOBS.length }}</span> Jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>
