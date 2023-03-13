import SubNav from "@/components/Navigation/SubNav.vue";
import { render, screen } from "@testing-library/vue";

import { createTestingPinia } from "@pinia/testing";
import { useRoute } from "vue-router";
vi.mock("vue-router");

import { useJobsStore } from "@/stores/jobs";
import type { Mock } from "vitest";

const useRouteMock = useRoute as Mock;

describe("SubNav", () => {
  const pinia = createTestingPinia();
  const renderSubNav = () => {
    render(SubNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };
  describe("when the user is on Jobs Page", () => {
    it("displays jobs count", () => {
      useRouteMock.mockReturnValue({ name: "JobResults" });

      const jobsCount = 16;
      const jobStore = useJobsStore();
      jobStore.jobs = Array(jobsCount).fill({});
      renderSubNav();

      const displayedJobsCount = screen.queryByText(jobsCount);

      expect(displayedJobsCount).toBeInTheDocument();
    });
  });

  describe("when the user is not on Jobs Page", () => {
    it("does not displays jobs count", () => {
      useRouteMock.mockReturnValue({ name: "Home" });

      const jobsCount = 11;
      const jobStore = useJobsStore();
      jobStore.jobs = Array(jobsCount).fill({});
      renderSubNav();

      const displayedJobsCount = screen.queryByText(jobsCount);

      expect(displayedJobsCount).not.toBeInTheDocument();
    });
  });
});
