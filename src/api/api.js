import axios from "axios"

export async function getImage() {
  try {
    axios.defaults.headers.common['x-api-key'] = process.env.API_KEY;
    let res = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: "full" } });
    return res.data[0].url;
  }
  catch (error) {
    console.log(error)
  }
}

