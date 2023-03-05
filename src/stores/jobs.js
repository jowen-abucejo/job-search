import { defineStore } from "pinia";
import getJobs from "../api/getJobs";

import { useUserStore } from "./user";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";

export const FILTERED_JOBS = "FILTERED_JOBS";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),

  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    },
  },

  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },

    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
      return uniqueJobTypes;
    },

    [FILTERED_JOBS](state) {
      const selectedOrg = useUserStore().selectedOrganizations;
      const selectedJobTypes = useUserStore().selectedJobTypes;

      return state.jobs.filter((job) => {
        if (selectedOrg.length > 0 && !selectedOrg.includes(job.organization))
          return false;
        if (
          selectedJobTypes.length > 0 &&
          !selectedJobTypes.includes(job.jobType)
        )
          return false;

        return true;
      });
    },
  },
});
