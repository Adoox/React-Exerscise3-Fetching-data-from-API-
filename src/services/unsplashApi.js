import axios from "axios";

const searchImages = async (serachTerm) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID zlU-kOzp3kCiu7mIKwdxxkr7_HfQHE4xi3Ml7O5t1Vk`,
    },
    params: {
      query: serachTerm,
    },
  });

  return res.data.results;
};

export default searchImages;
