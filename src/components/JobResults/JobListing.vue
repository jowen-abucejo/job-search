<script>
export default {
  name: "JobListing",
  props: {
    job: Object,
  },
  computed: {
    jobPageLink() {
      return `jobs/results/${this.job.id}`;
    },
  },
};
</script>

<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="mx-auto block rounded border border-solid border-purple-500 bg-white"
    >
      <div class="mx-8 border-b border-solid border-purple-500 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li class="mr-5 inline-block" v-for="location in job.locations">
                <span>{{ location }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="px-8 py-4">
          <div>
            <h3 class="mt-1 mb-2">Qualifications</h3>
            <div>
              <ul class="list-disc pl-8">
                <li v-for="qualification in job.minimumQualifications">
                  {{ qualification }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-2 mb-3 text-center">
        <router-link :to="jobPageLink" class="text-purple-500"
          >Expand</router-link
        >
      </div>
    </router-link>
  </li>
</template>
