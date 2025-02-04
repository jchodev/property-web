// ApiService.ts
import axios, { AxiosInstance } from "axios";

const API_URL = "https://property-api-nest-js.vercel.app";

export class ApiService {
  private static instance: ApiService;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });

    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}