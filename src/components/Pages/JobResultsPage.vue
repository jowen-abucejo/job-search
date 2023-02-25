<script>
import JobFilterSidebar from "../JobResults/JobFilterSidebar.vue";
import JobList from "../JobResults/JobList.vue";

export default {
  name: "JobResultsPage",
  components: { JobFilterSidebar, JobList },
};
</script>

<template>
  <div class="fex-row flex w-full flex-nowrap">
    <JobFilterSidebar />
    <JobList />
  </div>
</template>
