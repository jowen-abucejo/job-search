<script setup>
import ActionButton from "../Shared/ActionButton.vue";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
import { computed } from "vue";

const userStore = useUserStore();

const updateOrganizations = (organizations) =>
  userStore.ADD_SELECTED_ORGANIZATIONS(organizations);
const updateJobTypes = (jobTypes) => userStore.ADD_SELECTED_JOB_TYPES(jobTypes);

const jobStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobStore.UNIQUE_JOB_TYPES);
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
        headerTitle="Job Types"
        :options="UNIQUE_JOB_TYPES"
        :action="updateJobTypes"
      />

      <JobFilterSidebarCheckboxGroup
        headerTitle="Organizations"
        :options="UNIQUE_ORGANIZATIONS"
        :action="updateOrganizations"
      />
    </section>
  </div>
</template>
