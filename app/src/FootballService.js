import axios from "axios";

export async function getLeagues() {
  const response = await axios.get('https://localhost:5000');
  return response.data;
} ;