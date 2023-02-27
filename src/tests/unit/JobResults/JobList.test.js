import { render, screen } from "@testing-library/vue";

import JobList from "@/components/JobResults/JobList.vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";

vi.mock("axios");

describe("JobList", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    render(JobList);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("renders details of every job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    render(JobList, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const jobs = await screen.findAllByRole("listitem");
    expect(jobs).toHaveLength(15);
  });
});
