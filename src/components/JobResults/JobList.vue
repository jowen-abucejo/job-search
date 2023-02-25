<script>
import JobListing from "./JobListing.vue";

export default {
  name: "JobList",
  data() {
    return {
      jobs: [
        {
          id: "1",
          title: "Vue Developer",
          organization: "Yondu Inc.",
          minimumQualifications: ["1", "2"],
          locations: ["2", "3"],
        },
      ],
    };
  },
  components: { JobListing },
};
</script>

<template>
  <main class="min-h-screen flex-auto bg-gray-50 p-8">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>
