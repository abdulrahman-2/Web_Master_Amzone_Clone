import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://backend-starter-production.up.railway.app/api/auth",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
