import axios from "axios";

const API_KEY = "9fpizzsMTKEgPvLfnMsdC3kpNstixgxF";
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2";

export const fetchMostPopularArticles = async (period = 7) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/viewed/${period}.json?api-key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch articles");
  }
};
