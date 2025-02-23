import { authInstance } from "../../lib/axios";

export const getUser = async () => {
  const res = await authInstance.get("/me");
  const data = await res.data;
  return data;
};

export const logout = async () => {
  const res = await authInstance.post("/logout");
  const data = await res.data;
  return data;
};
