import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://your-backend.onrender.com/api",
  withCredentials: true, 
});

export default API;