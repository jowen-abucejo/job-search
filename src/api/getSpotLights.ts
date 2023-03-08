import axios from "axios";
import type { SpotLight } from "./types";

const getSpotLights = async () => {
  const baseUrl = "http://localhost:3000";
  const response = await axios.get<SpotLight[]>(`${baseUrl}/spotlights`);

  return response.data;
};

export default getSpotLights;
