import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500",
  // "https://kollege-api.onrender.com",
  // "http://localhost:3500",

  headers: { "Content-Type": "application/json" },
});
