import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001", // your backend
  headers: { "Content-Type": "application/json" },
});

export default API;
