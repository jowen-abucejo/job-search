import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "../../../stores/user";

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("keep tracks if user is logged in", () => {
    const store = useUserStore();
    expect(store.isLoggedIn).toBe(false);
  });

  it("stores user selected job organizations", () => {
    const store = useUserStore();
    expect(store.selectedOrganizations).toEqual([]);
  });
});

describe("actions", () => {
  describe("loginUser", () => {
    it("logs the user in", () => {
      const store = useUserStore();
      store.login();
      expect(store.isLoggedIn).toBe(true);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("update user selected organizations", () => {
      const store = useUserStore();
      store.ADD_SELECTED_ORGANIZATIONS(["Org1", "Org2"]);
      expect(store.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });
});
