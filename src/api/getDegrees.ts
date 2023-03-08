import axios from "axios";
import type { Job } from "./types";

const getDegrees = async () => {
  const baseUrl = "http://localhost:3000";
  const response = await axios.get<Job[]>(`${baseUrl}/degrees`);

  return response.data;
};

export default getDegrees;
