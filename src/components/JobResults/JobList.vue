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
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>

<template>
  <main class="min-h-screen flex-auto bg-gray-50 p-8">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>
