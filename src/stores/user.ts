import { defineStore } from "pinia";

export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";
export const CLEAR_USER_JOB_FILTER_SELECTIONS =
  "CLEAR_USER_JOB_FILTER_SELECTIONS";
export const UPDATE_SKILLS_SEARCH_TERM = "UPDATE_SKILLS_SEARCH_TERM";

export interface UserState {
  isLoggedIn: boolean;
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
  skillsSearchTerm: string;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
    skillsSearchTerm: "",
  }),

  actions: {
    login() {
      this.isLoggedIn = true;
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations: string[]) {
      this.selectedOrganizations = organizations;
    },
    [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
      this.selectedJobTypes = jobTypes;
    },
    [ADD_SELECTED_DEGREES](degrees: string[]) {
      this.selectedDegrees = degrees;
    },
    [CLEAR_USER_JOB_FILTER_SELECTIONS]() {
      this.selectedOrganizations = [];
      this.selectedJobTypes = [];
      this.selectedDegrees = [];
      this.skillsSearchTerm = "";
    },
    [UPDATE_SKILLS_SEARCH_TERM](searchTerm: string) {
      this.skillsSearchTerm = searchTerm;
    },
  },
});
