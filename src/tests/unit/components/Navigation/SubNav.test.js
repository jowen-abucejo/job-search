import SubNav from "@/components/Navigation/SubNav.vue";
import { render, screen } from "@testing-library/vue";

import { createTestingPinia } from "@pinia/testing";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/jobs";

const pinia = createTestingPinia();
const renderSubNav = (mocks, data) => {
  return render(SubNav, {
    global: {
      plugins: [pinia],
      mocks: mocks,
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    data() {
      return data;
    },
  });
};
describe("SubNav", () => {
  describe("when the user is on Jobs Page", () => {
    it("displays jobs count", () => {
      const $route = {
        name: "JobResults",
      };
      const data = {
        onJobsResultsPage: true,
      };

      const jobsCount = 16;
      const jobStore = useJobsStore();
      jobStore.FILTERED_JOBS = Array(jobsCount).fill({});
      renderSubNav({ $route }, data);

      const displayedJobsCount = screen.queryByText(jobsCount);

      expect(displayedJobsCount).toBeInTheDocument();
    });
  });

  describe("when the user is not on Jobs Page", () => {
    it("does not displays jobs count", () => {
      const $route = {
        name: "Home",
      };
      const data = {
        onJobsResultsPage: false,
      };

      const jobsCount = 11;
      const jobStore = useJobsStore();
      jobStore.FILTERED_JOBS = Array(jobsCount).fill({});
      renderSubNav({ $route }, data);

      const displayedJobsCount = screen.queryByText(jobsCount);

      expect(displayedJobsCount).not.toBeInTheDocument();
    });
  });
});
