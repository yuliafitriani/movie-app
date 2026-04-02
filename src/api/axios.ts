import axios from "axios";

// export const apiClient = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
//   timeout: 10_000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_READ_ACCESS_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
