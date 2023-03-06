<script setup>
import JobListing from "./JobListing.vue";
import { mapActions, mapState } from "pinia";

import { useJobsStore } from "@/stores/jobs";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentPage = computed(() => Number.parseInt(route.query.page || "1"));
const pageSize = computed(() => Number.parseInt(route.query.size || "10"));
const previousPage = computed(() => {
  const previousPage = currentPage.value - 1;
  return previousPage >= 1 ? previousPage : undefined;
});

const jobStore = useJobsStore();
const jobs = computed(() => jobStore.FILTERED_JOBS);
const nextPage = computed(() => {
  const nextPage = currentPage.value + 1;
  const maxPage = Math.ceil(jobs.value.length / pageSize.value);

  return nextPage <= maxPage ? nextPage : undefined;
});
const displayedJobs = computed(() => {
  const firstJobIndex = (currentPage.value - 1) * pageSize.value;
  const lastJobIndex = currentPage.value * pageSize.value;
  return jobs.value.slice(firstJobIndex, lastJobIndex);
});

const FETCH_JOBS = jobStore.FETCH_JOBS;

onMounted(() => FETCH_JOBS());
</script>

<template>
  <main class="min-h-screen flex-auto bg-gray-50 p-8">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{
              name: 'JobResults',
              query: { page: previousPage, size: pageSize },
            }"
            class="mx-3 text-sm font-semibold text-purple-500"
            role="link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{
              name: 'JobResults',
              query: { page: nextPage, size: pageSize },
            }"
            role="link"
            class="mx-3 text-sm font-semibold text-purple-500"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
