import type { Job } from "@/api/types";
import { defineStore } from "pinia";
import getJobs from "../api/getJobs";

import { useUserStore } from "./user";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";

export const FILTERED_JOBS = "FILTERED_JOBS";

export interface JobsState {
  jobs: Job[];
}

export const useJobsStore = defineStore("jobs", {
  state: (): JobsState => ({
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
      const uniqueOrganizations = new Set<string>();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },

    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set<string>();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
      return uniqueJobTypes;
    },

    [FILTERED_JOBS](state) {
      const selectedOrg = useUserStore().selectedOrganizations;
      const selectedJobTypes = useUserStore().selectedJobTypes;
      const selectedDegrees = useUserStore().selectedDegrees;
      const searchTerm = useUserStore().skillsSearchTerm;

      return state.jobs.filter((job) => {
        if (selectedOrg.length > 0 && !selectedOrg.includes(job.organization))
          return false;

        if (
          selectedJobTypes.length > 0 &&
          !selectedJobTypes.includes(job.jobType)
        )
          return false;

        if (selectedDegrees.length > 0 && !selectedDegrees.includes(job.degree))
          return false;

        if (
          searchTerm &&
          !job.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
          return false;

        return true;
      });
    },
  },
});
