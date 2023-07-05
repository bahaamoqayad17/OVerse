"use client";
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.API_URL,
  "Content-Type": "multipart/form-data",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
