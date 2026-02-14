import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;

export const fetchProducts = async () => {
  const response = await api.get("/products?limit=200");
  return response.data.products;
};


