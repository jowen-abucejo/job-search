import axios from "axios";

const getSpotLights = async () => {
  const baseUrl = "http://localhost:3000";
  const response = await axios.get(`${baseUrl}/spotlights`);

  return response.data;
};

export default getSpotLights;
