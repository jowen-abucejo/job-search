import axios from "axios";
import type { SpotLight } from "./types";

const getSpotLights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const response = await axios.get<SpotLight[]>(`${baseUrl}/spotlights`);

  return response.data;
};

export default getSpotLights;
