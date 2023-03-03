import axios from "axios";

import getSpotLights from "@/api/getSpotLights";

vi.mock("axios");

describe("getSpotLights", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [{ title: "SpotLight 1" }],
    });
  });

  it("fetches spotlights", async () => {
    await getSpotLights();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/spotlights");
  });

  it("extracts spotlight objects from response", async () => {
    const spotlights = await getSpotLights();
    expect(spotlights).toEqual([
      {
        title: "SpotLight 1",
      },
    ]);
  });
});
