import { render, screen } from "@testing-library/vue";

import JobList from "@/components/JobResults/JobList.vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";

vi.mock("axios");

const renderJobList = ($route) =>
  render(JobList, {
    global: {
      mocks: {
        $route,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

describe("JobList", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = {
      query: {
        page: 1,
        size: 10,
      },
    };
    renderJobList($route);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("renders details of every job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const $route = {
      query: {
        page: 1,
        size: 10,
      },
    };
    renderJobList($route);
    const jobs = await screen.findAllByRole("listitem");
    expect(jobs).toHaveLength(10);
  });
});
