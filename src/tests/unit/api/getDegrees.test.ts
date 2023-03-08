import axios from "axios";

import getDegrees from "@/api/getDegrees";
import type { Mock } from "vitest";

vi.mock("axios");

const axiosGetMock = axios.get as Mock;

describe("getDegrees", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [{ id: 1, degree: "Master's" }],
    });
  });

  it("fetches degrees from the backend", async () => {
    await getDegrees();
    expect(axiosGetMock).toHaveBeenCalledWith("http://localhost:3000/degrees");
  });

  it("extracts degrees from response", async () => {
    const jobs = await getDegrees();
    expect(jobs).toEqual([
      {
        id: 1,
        degree: "Master's",
      },
    ]);
  });
});
