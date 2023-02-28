import SubNav from "@/components/Navigation/SubNav.vue";
import { render, screen } from "@testing-library/vue";

const renderSubNav = (mocks, data) => {
  return render(SubNav, {
    global: {
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
      renderSubNav({ $route }, data);

      const jobsCount = screen.queryByText("1643");

      expect(jobsCount).toBeInTheDocument();
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
      renderSubNav({ $route }, data);

      const jobsCount = screen.queryByText("1643");

      expect(jobsCount).not.toBeInTheDocument();
    });
  });
});
