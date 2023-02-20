import MainNav from "../../components/MainNav.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

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

describe("when user logs in", () => {
  it("display user profile picture", async () => {
    render(MainNav);
    screen.debug();

    let profileImage = screen.queryByRole("img", {
      name: /profile image/i,
    });
    expect(profileImage).not.toBeInTheDocument();

    const logInButton = screen.getByRole("button", {
      name: /sign in/i,
    });
    await userEvent.click(logInButton);

    profileImage = screen.queryByRole("img", {
      name: /profile image/i,
    });
    expect(profileImage).toBeInTheDocument();
  });
});
