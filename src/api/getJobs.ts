import axios from "axios";
import type { Job } from "./types";

const getJobs = async () => {
  const baseUrl = "http://localhost:3000";
  const response = await axios.get<Job[]>(`${baseUrl}/jobs`);

  return response.data;
};

export default getJobs;
