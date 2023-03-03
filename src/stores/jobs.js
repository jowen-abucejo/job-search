import { defineStore } from "pinia";
import getJobs from "../api/getJobs";

import { useUserStore } from "./user";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

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
    [FILTERED_JOBS](state) {
      const selectedOrg = useUserStore().selectedOrganizations;

      if (selectedOrg.length > 0)
        return state.jobs.filter((job) =>
          selectedOrg.includes(job.organization)
        );

      return state.jobs;
    },
  },
});
