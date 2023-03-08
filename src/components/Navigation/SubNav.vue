<script lang="ts" setup>
import { useJobsStore } from "@/stores/jobs";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const onJobResultsPage = computed(() => route.name === "JobResults");

const jobStore = useJobsStore();
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);
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
