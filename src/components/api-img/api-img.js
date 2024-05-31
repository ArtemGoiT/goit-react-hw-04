import axios from "axios";

async function fetchImages(searchQuery, page) {
    const API = import.meta.env.MY_SECRET_KEY;
    const baseUrl = "https://api.unsplash.com/search/photos/";
    const params = new URLSearchParams({
        qurey; searchQuery,
        client_id: API,
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