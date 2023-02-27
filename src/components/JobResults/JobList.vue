<script>
import JobListing from "./JobListing.vue";
import axios from "axios";

export default {
  name: "JobList",
  data() {
    return {
      jobs: [],
    };
  },
  components: { JobListing },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    pageSize() {
      return Number.parseInt(this.$route.query.size || "10");
    },
    displayedJobs() {
      const jobPerPage = this.$route.query.size || "10";
      const firstJobIndex = (this.currentPage - 1) * this.pageSize;
      const lastJobIndex = this.currentPage * this.pageSize;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;

      return previousPage >= 1 ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.jobs.length / this.pageSize);

      return nextPage <= maxPage ? nextPage : undefined;
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
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
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{
              name: 'JobResults',
              query: { page: nextPage, size: pageSize },
            }"
            class="mx-3 text-sm font-semibold text-purple-500"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
