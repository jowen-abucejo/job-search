import axios from "axios";
import type { Degree } from "./types";

const getDegrees = async () => {
  const baseUrl = "http://localhost:3000";
  const response = await axios.get<Degree[]>(`${baseUrl}/degrees`);

  return response.data;
};

export default getDegrees;
