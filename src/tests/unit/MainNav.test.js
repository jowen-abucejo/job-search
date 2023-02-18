import MainNav from "../../components/MainNav.vue";
import { render, screen } from "@testing-library/vue";

describe("MainNav", () => {
  it("displays menu items for navigation", () => {
    render(MainNav);
    const navItems = screen.getAllByRole("listitem");
    const navTexts = navItems.map((item) => item.textContent);

    expect(navTexts).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students",
    ]);
  });
});
