import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://new-mart-ecommerce-backend.vercel.app/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
