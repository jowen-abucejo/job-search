import MainNav from "@/components/Navigation/MainNav.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user";

const pinia = createTestingPinia();
const renderMainNav = () => {
  return render(MainNav, {
    plugins: [pinia],
    global: {
      mocks: {
        $route: {
          name: "Home",
        },
      },
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
    },
  });
};

describe("MainNav", () => {
  it("displays menu items for navigation", () => {
    renderMainNav();
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
    renderMainNav();
    const userStore = useUserStore();

    let profileImage = screen.queryByRole("img", {
      name: /profile image/i,
    });
    expect(profileImage).not.toBeInTheDocument();

    const logInButton = screen.getByRole("button", {
      name: /sign in/i,
    });

    userStore.isLoggedIn = true;
    await userEvent.click(logInButton);

    profileImage = screen.queryByRole("img", {
      name: /profile image/i,
    });
    expect(profileImage).toBeInTheDocument();
  });
});
