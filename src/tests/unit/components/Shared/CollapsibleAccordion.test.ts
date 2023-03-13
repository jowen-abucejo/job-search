import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

const renderAccordion = (config = {}) =>
  render(CollapsibleAccordion, {
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    ...config,
  });

describe("CollapsibleAccordion", () => {
  it("renders child component", async () => {
    const props = {
      title: "My Title",
    };
    const slots = {
      default: "<h3>Nested Child</h3>",
    };
    renderAccordion({ slots, props });
    expect(screen.queryByText("Nested Child")).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: /my title/i });
    await userEvent.click(button);

    expect(screen.getByText("Nested Child")).toBeInTheDocument();
  });

  describe("when no child component given", () => {
    it("displays the default content", async () => {
      const props = {
        title: "My Title",
      };
      renderAccordion({ props });
      const button = screen.getByRole("button", { name: /my title/i });
      await userEvent.click(button);

      expect(screen.getByText("No content given!")).toBeInTheDocument();
    });
  });
});
