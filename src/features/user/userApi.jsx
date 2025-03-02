import { axiosInstance } from "../../lib/axios";

export const getUser = async () => {
  const res = await axiosInstance.get("/auth/me");
  const data = await res.data;
  return data;
};

export const logout = async () => {
  const res = await axiosInstance.post("/auth/logout");
  const data = await res.data;
  return data;
};
