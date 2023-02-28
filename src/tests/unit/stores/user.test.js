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
});

describe("actions", () => {
  describe("loginUser", () => {
    it("logs the user in", () => {
      const store = useUserStore();
      store.login();
      expect(store.isLoggedIn).toBe(true);
    });
  });
});
