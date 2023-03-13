import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createTestingPinia } from "@pinia/testing";
import { useRoute } from "vue-router";
vi.mock("vue-router");

import { useUserStore } from "@/stores/user";

import JobFilterSidebarSkillsVue from "@/components/JobResults/JobFilterSidebarSkills.vue";
import type { Mock } from "vitest";

const useRouteMock = useRoute as Mock;

describe("JobFilterSidebarSkills", () => {
  const pinia = createTestingPinia();
  const renderJobFilterSidebarSkills = () => {
    useRouteMock.mockReturnValue({
      query: {},
    });
    render(JobFilterSidebarSkillsVue, {
      global: {
        plugins: [pinia],
      },
    });
  };

  it("populates search input from store", () => {
    const userStore = useUserStore();
    userStore.skillsSearchTerm = "Vue";

    renderJobFilterSidebarSkills();
    const searchInput = screen.getByRole<HTMLInputElement>("textbox");
    expect(searchInput.value).toBe("Vue");
  });

  it("writes user input to store", async () => {
    const userStore = useUserStore();
    userStore.skillsSearchTerm = "";

    renderJobFilterSidebarSkills();
    const searchInput = screen.getByRole<HTMLInputElement>("textbox");

    await userEvent.type(searchInput, "V");
    await userEvent.click(document.body);

    expect(userStore.UPDATE_SKILLS_SEARCH_TERM).toHaveBeenCalledWith("V");
  });

  it("removes whitespace from user input", async () => {
    const userStore = useUserStore();
    userStore.skillsSearchTerm = "";

    renderJobFilterSidebarSkills();
    const searchInput = screen.getByRole<HTMLInputElement>("textbox");

    await userEvent.type(searchInput, " Vue  ");
    await userEvent.click(document.body);

    expect(userStore.UPDATE_SKILLS_SEARCH_TERM).toHaveBeenCalledWith("Vue");
  });
});
