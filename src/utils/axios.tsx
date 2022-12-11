import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api-hotel-ranking.up.railway.app" as string, // THE API (backend) URL
});

export default instance;
