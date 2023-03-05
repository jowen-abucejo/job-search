<script>
import ActionButton from "../Shared/ActionButton.vue";

import { mapState, mapActions } from "pinia";

import {
  useJobsStore,
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
} from "@/stores/jobs";
import {
  useUserStore,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
} from "@/stores/user";
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    JobFilterSidebarCheckboxGroup,
  },
  methods: {
    ...mapActions(useUserStore, [
      ADD_SELECTED_ORGANIZATIONS,
      ADD_SELECTED_JOB_TYPES,
    ]),
    updateOrganizations(selectedOrganizations) {
      this.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations);
    },
    updateJobTypes(selectedJobTypes) {
      this.ADD_SELECTED_JOB_TYPES(selectedJobTypes);
    },
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS, UNIQUE_JOB_TYPES]),
  },
};
</script>

<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-gray-300 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton
            text="Clear Filter"
            color="secondary"
            class="mx-2 rounded border-none p-2"
          />
        </div>
      </div>
      <JobFilterSidebarCheckboxGroup
        headerTitle="Organizations"
        :options="UNIQUE_ORGANIZATIONS"
        :action="updateOrganizations"
      />

      <JobFilterSidebarCheckboxGroup
        headerTitle="Job Types"
        :options="UNIQUE_JOB_TYPES"
        :action="updateJobTypes"
      />
    </section>
  </div>
</template>
