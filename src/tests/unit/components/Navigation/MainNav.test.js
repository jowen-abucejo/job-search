import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useRoute } from "vue-router";
vi.mock("vue-router");
import { useUserStore } from "@/stores/user";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const pinia = createTestingPinia();
  useRoute.mockReturnValue({ name: "Home" });
  const renderMainNav = () => {
    render(MainNav, {
      plugins: [pinia],
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

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
});
