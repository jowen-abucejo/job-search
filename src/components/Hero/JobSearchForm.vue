<script>
import ActionButton from "../Shared/ActionButton.vue";
import TextInput from "../Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  data() {
    return {
      role: "",
      location: "",
    };
  },
  components: { ActionButton, TextInput },
  methods: {
    searchJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>

<template>
  <form
    @submit.prevent="searchJobs"
    class="flex h-12 items-center rounded-3xl border border-gray-500"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="mx-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base">
      <div class="relative z-0 flex flex-1 items-center pr-3">
        <label for="role" class="absolute -top-7">Role</label>
        <TextInput id="role" v-model="role" placeholder="Software Engineer" />
      </div>
      <div
        class="mr-3 flex h-full items-center border border-x-gray-500 bg-gray-200 px-3"
      >
        <span>in</span>
      </div>
      <div class="relative z-0 flex flex-1 items-center pr-3">
        <label for="location" class="absolute -top-7">Where?</label>
        <TextInput id="location" v-model="location" placeholder="BGC Taguig" />
      </div>
    </div>
    <ActionButton
      text="Search"
      class="h-full rounded-r-full px-3 font-semibold outline-none hover:border-none"
      color="secondary"
      type="submit"
    />
  </form>
</template>
