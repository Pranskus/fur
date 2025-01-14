// You can use this free demo access key, but for production, you should get your own
const UNSPLASH_ACCESS_KEY = "v_VkpgbGBtGk5u_h9Zr_yRXNhQB3v1pnPv7zf8_YH8A";

export const fetchFurnitureImages = async (query, count = 1) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    return data.results.map((img) => ({
      id: img.id,
      url: img.urls.regular,
      alt: img.alt_description || query,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
