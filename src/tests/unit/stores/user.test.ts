import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "@/stores/user";

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

  it("stores user's search term for skills and qualifications", () => {
    const store = useUserStore();
    expect(store.skillsSearchTerm).toBe("");
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

  describe("CLEAR_USER_JOB_FILTER_SELECTIONS", () => {
    it("removes all job filters the user has selected", () => {
      const store = useUserStore();
      store.selectedOrganizations = ["Org1"];
      store.selectedJobTypes = ["JobType1"];
      store.selectedDegrees = ["Degree1"];
      store.skillsSearchTerm = "Vue Developer";

      store.CLEAR_USER_JOB_FILTER_SELECTIONS();

      expect(store.selectedOrganizations).toEqual([]);
      expect(store.selectedJobTypes).toEqual([]);
      expect(store.selectedDegrees).toEqual([]);
      expect(store.skillsSearchTerm).toBe("");
    });
  });

  describe("UPDATE_SKILLS_SEARCH_TERM", () => {
    it("receives search term for skills the user has entered", () => {
      const store = useUserStore();
      store.skillsSearchTerm = "";
      store.UPDATE_SKILLS_SEARCH_TERM("Vue");
      expect(store.skillsSearchTerm).toBe("Vue");
    });
  });
});
