import axios from "axios";

import getJobs from "@/api/getJobs";
import type { Mock } from "vitest";

vi.mock("axios");

const axiosGetMock = axios.get as Mock;

describe("getJobs", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [{ id: 1, title: "Vue Developer" }],
    });
  });

  it("fetches jobs the user can apply to", async () => {
    await getJobs();
    expect(axiosGetMock).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("extracts jobs from response", async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual([
      {
        id: 1,
        title: "Vue Developer",
      },
    ]);
  });
});
