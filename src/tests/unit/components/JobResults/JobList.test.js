import { render, screen } from "@testing-library/vue";

import JobList from "@/components/JobResults/JobList.vue";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";

vi.mock("axios");

import { useRoute } from "vue-router";

vi.mock("vue-router");

const renderJobList = () => {
  const pinia = createTestingPinia();

  return render(JobList, {
    global: {
      plugins: [pinia],
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
};

describe("JobList", () => {
  it("fetches jobs", () => {
    useRoute.mockReturnValue({
      query: {
        page: 1,
        size: 10,
      },
    });
    renderJobList();
    const jobStore = useJobsStore();
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("displays maximum jobs based on query params size", async () => {
    useRoute.mockReturnValue({
      query: {
        page: 1,
        size: 10,
      },
    });
    renderJobList();
    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});
    const jobs = await screen.findAllByRole("listitem");
    expect(jobs).toHaveLength(10);
  });

  describe("when params has no page number and page size", () => {
    it("displays page 1 and default 10 jobs", async () => {
      useRoute.mockReturnValue({
        query: {},
      });
      renderJobList();
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      expect(screen.getByText("Page 1")).toBeInTheDocument();

      const jobs = await screen.findAllByRole("listitem");
      expect(jobs).toHaveLength(10);
    });
  });

  describe("when users is on first page", () => {
    useRoute.mockReturnValue({
      query: {
        page: 1,
        size: 10,
      },
    });

    it("shows link to next page", async () => {
      renderJobList();
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextPageLink = screen.queryByRole("link", { name: /next/i });
      expect(nextPageLink).toBeInTheDocument();
    });

    it("doesn't shows link to previous page", async () => {
      renderJobList();
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const previousPageLink = screen.queryByRole("link", {
        name: /previous/i,
      });
      expect(previousPageLink).not.toBeInTheDocument();
    });
  });

  describe("when users is on last page", () => {
    it("doesn't shows link to next page", async () => {
      useRoute.mockReturnValue({
        query: {
          page: 2,
          size: 10,
        },
      });
      renderJobList();
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextPageLink = screen.queryByRole("link", { name: /next/i });
      expect(nextPageLink).not.toBeInTheDocument();
    });

    it("shows link to previous page", async () => {
      useRoute.mockReturnValue({
        query: {
          page: 2,
          size: 10,
        },
      });
      renderJobList();
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const previousPageLink = screen.queryByRole("link", {
        name: /previous/i,
      });
      expect(previousPageLink).toBeInTheDocument();
    });
  });

  describe("when first page is also the last page", () => {
    it("doesn't shows link to next page", async () => {
      useRoute.mockReturnValue({
        query: {
          page: 1,
          size: 15,
        },
      });
      renderJobList();
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextPageLink = screen.queryByRole("link", { name: /next/i });
      expect(nextPageLink).not.toBeInTheDocument();
    });

    it("doesn't shows link to previous page", async () => {
      useRoute.mockReturnValue({
        query: {
          page: 1,
          size: 15,
        },
      });
      renderJobList();
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const previousPageLink = screen.queryByRole("link", {
        name: /previous/i,
      });
      expect(previousPageLink).not.toBeInTheDocument();
    });
  });
});
