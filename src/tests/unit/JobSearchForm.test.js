import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import JobSearchForm from "@/components/Hero/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("it redirect use to job results page with  parameters", async () => {
      const $router = { push: vi.fn() };

      render(JobSearchForm, {
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = screen.getByRole("textbox", {
        name: /role/i,
      });

      await userEvent.type(roleInput, "Vue Developer");

      const locationInput = screen.getByRole("textbox", {
        name: /where/i,
      });

      await userEvent.type(locationInput, "Taguig");

      const submitButton = screen.getByRole("button", {
        name: /search/i,
      });

      await userEvent.click(submitButton);

      expect($router.push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Taguig",
        },
      });
    });
  });
});
