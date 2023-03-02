import { render, screen } from "@testing-library/vue";

import JobList from "@/components/JobResults/JobList.vue";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";

vi.mock("axios");

const renderJobList = ($route) => {
  const pinia = createTestingPinia();

  return render(JobList, {
    global: {
      plugins: [pinia],
      mocks: {
        $route,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
};

describe("JobList", () => {
  it("fetches jobs", () => {
    const $route = {
      query: {
        page: 1,
        size: 10,
      },
    };
    renderJobList($route);
    const jobStore = useJobsStore();
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("displays maximum jobs based on query params size", async () => {
    const $route = {
      query: {
        page: 1,
        size: 10,
      },
    };
    renderJobList($route);
    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});
    const jobs = await screen.findAllByRole("listitem");
    expect(jobs).toHaveLength(10);
  });

  describe("when params has no page number and page size", () => {
    it("displays page 1 and default 10 jobs", async () => {
      const $route = {
        query: {
          page: undefined,
          size: undefined,
        },
      };
      renderJobList($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      expect(screen.getByText("Page 1")).toBeInTheDocument();

      const jobs = await screen.findAllByRole("listitem");
      expect(jobs).toHaveLength(10);
    });
  });

  describe("when users is on first page", () => {
    const $route = {
      query: {
        page: 1,
        size: 10,
      },
    };

    it("shows link to next page", async () => {
      renderJobList($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextPageLink = screen.queryByRole("link", { name: /next/i });
      expect(nextPageLink).toBeInTheDocument();
    });

    it("doesn't shows link to previous page", async () => {
      renderJobList($route);
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
    const $route = {
      query: {
        page: 2,
        size: 10,
      },
    };
    it("doesn't shows link to next page", async () => {
      renderJobList($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextPageLink = screen.queryByRole("link", { name: /next/i });
      expect(nextPageLink).not.toBeInTheDocument();
    });

    it("shows link to previous page", async () => {
      renderJobList($route);
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
    const $route = {
      query: {
        page: 1,
        size: 15,
      },
    };
    it("doesn't shows link to next page", async () => {
      renderJobList($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextPageLink = screen.queryByRole("link", { name: /next/i });
      expect(nextPageLink).not.toBeInTheDocument();
    });

    it("doesn't shows link to previous page", async () => {
      renderJobList($route);
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
