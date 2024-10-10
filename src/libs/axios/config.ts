import axios from "axios";

export const apiConfig = axios.create({
  baseURL: process.env.API_CONFIG,
})