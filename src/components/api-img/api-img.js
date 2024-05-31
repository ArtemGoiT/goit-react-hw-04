import axios from "axios";

async function fetchImages(searchQuery, page) {
  const API_KEY = "KwysuB8dhwhQpXQFiFliVjiE-D5jTnF9zKpk6m2LMtA";
  const baseUrl = "https://api.unsplash.com/search/photos/";

  const params = new URLSearchParams({
    query: searchQuery,
    client_id: API_KEY,
    per_page: 12,
    page: page,
  });

  try {
    const response = await axios.get(`${baseUrl}?${params}`);
    const { results, total } = response.data;
    return { results, total };
  } catch (error) {
    console.log(error);
  }
}
export default fetchImages;
