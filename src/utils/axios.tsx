import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080" as string, // THE API (backend) URL
});

export default instance;
