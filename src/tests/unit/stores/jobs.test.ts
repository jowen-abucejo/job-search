import { createPinia, setActivePinia } from "pinia";
import { useJobsStore } from "@/stores/jobs";

import axios from "axios";
import { useUserStore } from "@/stores/user";
import type { Mock } from "vitest";
import type { Job } from "@/api/types";

vi.mock("axios");

const axiosGetMock = axios.get as Mock;

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores list of jobs", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("FETCH_JOBS", () => {
    it("makes an API request and stores received jobs", async () => {
      axiosGetMock.mockResolvedValue({
        data: ["Job1"],
      });
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(["Job1"]);
    });
  });
});

describe("getters", () => {
  const createJob = (job: Partial<Job> = {}) => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualifications: [
      "Mesh granular deliverables, engineer enterprise convergence",
    ],
    preferredQualifications: [
      "Mesh wireless metrics, syndicate innovative markets",
    ],
    description: ["Away someone forget effect wait land."],
    dateAdded: "2021-07-04",
    ...job,
  });
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("UNIQUE_ORGANIZATIONS", () => {
    it("find unique organizations from list of jobs", () => {
      const store = useJobsStore();
      store.jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];

      const result = store.UNIQUE_ORGANIZATIONS;
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filter jobs based on user selected organizations", () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Microsoft" }),
      ];

      const userStore = useUserStore();
      userStore.selectedOrganizations = ["Google", "Microsoft"];

      const result = jobStore.FILTERED_JOBS;
      expect(result).toEqual([
        createJob({ organization: "Google" }),
        createJob({ organization: "Microsoft" }),
      ]);
    });

    it("filter jobs based on user selected job types", () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        createJob({ jobType: "Intern" }),
        createJob({ jobType: "Part-time" }),
        createJob({ jobType: "Full-time" }),
      ];

      const userStore = useUserStore();
      userStore.selectedJobTypes = ["Intern", "Full-time"];

      const result = jobStore.FILTERED_JOBS;
      expect(result).toEqual([
        createJob({ jobType: "Intern" }),
        createJob({ jobType: "Full-time" }),
      ]);
    });

    it("filter jobs based on user selected degrees", () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        createJob({ degree: "Ph.D." }),
        createJob({ degree: "Bachelor's" }),
        createJob({ degree: "Master's" }),
      ];

      const userStore = useUserStore();
      userStore.selectedDegrees = ["Ph.D.", "Master's"];

      const result = jobStore.FILTERED_JOBS;
      expect(result).toEqual([
        createJob({ degree: "Ph.D." }),
        createJob({ degree: "Master's" }),
      ]);
    });
  });
});
