import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createTestingPinia } from "@pinia/testing";

import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFilterSidebarCheckboxGroup.vue";

describe("JobFilterSidebarCheckboxGroup", () => {
  const createProps = (props = {}) => ({
    headerTitle: "SomeTitle",
    options: ["option 1", "option 2"],
    action: vi.fn(),
    ...props,
  });

  const renderCheckboxGroup = (props, $router) => {
    const pinia = createTestingPinia();

    render(JobFilterSidebarCheckboxGroup, {
      global: {
        mocks: {
          $router,
        },
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        ...props,
      },
    });
  };

  it("renders list of options", async () => {
    const props = createProps({
      headerTitle: "Organizations",
      options: ["Microsoft", "Google"],
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
      const action = vi.fn();
      const props = createProps({
        headerTitle: "Organizations",
        options: ["Microsoft", "Google", "Amazon"],
        action,
      });
      renderCheckboxGroup(props);

      const button = screen.getByRole("button", { name: /organizations/i });
      await userEvent.click(button);

      const checkbox = screen.getByRole("checkbox", { name: /amazon/i });
      await userEvent.click(checkbox);

      expect(action).toHaveBeenCalledWith(["Amazon"]);
    });
  });

  it("navigate user to job results page for fresh list of jobs", async () => {
    const push = vi.fn();
    const props = createProps({
      headerTitle: "Organizations",
      options: ["Microsoft", "Google", "Amazon"],
    });
    renderCheckboxGroup(props, { push });

    const button = screen.getByRole("button", { name: /organizations/i });
    await userEvent.click(button);

    const checkbox = screen.getByRole("checkbox", { name: /amazon/i });
    await userEvent.click(checkbox);

    expect(push).toHaveBeenCalledWith({ name: "JobResults" });
  });
});
