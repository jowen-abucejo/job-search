import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createTestingPinia } from "@pinia/testing";
import { useRouter } from "vue-router";
vi.mock("vue-router");

import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFilterSidebarCheckboxGroup.vue";

describe("JobFilterSidebarCheckboxGroup", () => {
  const createProps = (props = {}) => ({
    headerTitle: "SomeTitle",
    options: new Set(["option 1", "option 2"]),
    action: vi.fn(),
    ...props,
  });

  const renderCheckboxGroup = (props = {}) => {
    const pinia = createTestingPinia();
    return render(JobFilterSidebarCheckboxGroup, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props,
    });
  };

  it("renders list of options", async () => {
    const props = createProps({
      headerTitle: "Organizations",
      options: new Set(["Microsoft", "Google"]),
    });
    renderCheckboxGroup(props);

    const button = screen.getByRole("button", { name: /organizations/i });
    await userEvent.click(button);

    const organizationsListItems = screen.getAllByRole("listitem");
    const organizations = organizationsListItems.map(
      (node) => node.textContent
    );

    expect(organizations).toEqual(["Microsoft", "Google"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for organizations", async () => {
      useRouter.mockReturnValue({ push: vi.fn() });
      const action = vi.fn();
      const props = createProps({
        headerTitle: "Organizations",
        options: new Set(["Microsoft", "Google", "Amazon"]),
        action: action,
      });
      renderCheckboxGroup(props);

      const button = screen.getByRole("button", { name: /organizations/i });
      await userEvent.click(button);

      const checkbox = screen.getByRole("checkbox", { name: /amazon/i });
      await userEvent.click(checkbox);
      expect(action).toHaveBeenCalledWith(["Amazon"]);
    });

    it("navigate user to job results page for fresh list of jobs", async () => {
      const push = vi.fn();
      const action = vi.fn();
      useRouter.mockReturnValue({ push });
      const props = createProps({
        headerTitle: "Organizations",
        options: new Set(["Microsoft", "Google", "Amazon"]),
        action,
      });
      renderCheckboxGroup(props);

      const button = screen.getByRole("button", { name: /organizations/i });
      await userEvent.click(button);

      const checkbox = screen.getByRole("checkbox", { name: /amazon/i });
      await userEvent.click(checkbox);

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
