<script lang="ts" setup>
import ActionButton from "../Shared/ActionButton.vue";

import { useJobsStore } from "@/stores/jobs";
import { CLEAR_USER_JOB_FILTER_SELECTIONS, useUserStore } from "@/stores/user";
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
import { computed } from "vue";
import { useDegreesStore } from "@/stores/degrees";
import JobFilterSidebarSkills from "./JobFilterSidebarSkills.vue";

const userStore = useUserStore();

const updateOrganizations = (organizations: string[]) =>
  userStore.ADD_SELECTED_ORGANIZATIONS(organizations);
const updateJobTypes = (jobTypes: string[]) =>
  userStore.ADD_SELECTED_JOB_TYPES(jobTypes);
const updateDegrees = (degrees: string[]) =>
  userStore.ADD_SELECTED_DEGREES(degrees);

const jobStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobStore.UNIQUE_JOB_TYPES);

const degreesStore = useDegreesStore();
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES);

const clearJobFilters = userStore.CLEAR_USER_JOB_FILTER_SELECTIONS;
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
            @click="clearJobFilters"
          />
        </div>
      </div>
      <JobFilterSidebarSkills />
      <JobFilterSidebarCheckboxGroup
        headerTitle="Job Types"
        :options="UNIQUE_JOB_TYPES"
        :action="updateJobTypes"
      />

      <JobFilterSidebarCheckboxGroup
        headerTitle="Degrees"
        :options="UNIQUE_DEGREES"
        :action="updateDegrees"
      />

      <JobFilterSidebarCheckboxGroup
        headerTitle="Organizations"
        :options="UNIQUE_ORGANIZATIONS"
        :action="updateOrganizations"
      />
    </section>
  </div>
</template>
