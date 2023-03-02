import axios from "axios";

const getJobs = async () => {
  const baseUrl = "http://localhost:3000";
  const response = await axios.get(`${baseUrl}/jobs`);

  return response.data;
};

export default getJobs;
