import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://nebulo.onrender.com/api" : "/api",
  withCredentials: true,
});
