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

  it("stores user selected degrees", () => {
    const store = useUserStore();
    expect(store.selectedDegrees).toEqual([]);
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

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("update user selected job types", () => {
      const store = useUserStore();
      store.ADD_SELECTED_JOB_TYPES(["JobType1", "JobType2"]);
      expect(store.selectedJobTypes).toEqual(["JobType1", "JobType2"]);
    });
  });

  describe("ADD_SELECTED_DEGREES", () => {
    it("update user selected degrees", () => {
      const store = useUserStore();
      store.ADD_SELECTED_DEGREES(["Degree1", "Degree2"]);
      expect(store.selectedDegrees).toEqual(["Degree1", "Degree2"]);
    });
  });
});
