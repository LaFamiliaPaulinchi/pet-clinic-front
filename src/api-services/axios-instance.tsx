import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://s3demo.onrender.com", // Cambia esto por tu URL base
  // timeout: 10000, // Tiempo límite de solicitud en milisegundos
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
