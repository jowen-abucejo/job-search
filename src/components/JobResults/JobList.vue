<script>
import JobListing from "./JobListing.vue";
import { mapActions, mapState } from "pinia";

import { useJobsStore, FETCH_JOBS, FILTERED_JOBS } from "@/stores/jobs";

export default {
  name: "JobList",
  components: { JobListing },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    pageSize() {
      return Number.parseInt(this.$route.query.size || "10");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;

      return previousPage >= 1 ? previousPage : undefined;
    },
    ...mapState(useJobsStore, {
      jobs: FILTERED_JOBS,
      nextPage() {
        const nextPage = this.currentPage + 1;
        const maxPage = Math.ceil(this.jobs.length / this.pageSize);

        return nextPage <= maxPage ? nextPage : undefined;
      },
      displayedJobs() {
        const firstJobIndex = (this.currentPage - 1) * this.pageSize;
        const lastJobIndex = this.currentPage * this.pageSize;
        return this.jobs.slice(firstJobIndex, lastJobIndex);
      },
    }),
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
};
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
