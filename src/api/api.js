import axios from "axios";

export const loginUser = (data) => axios.post("http://localhost:3000/api/auth/login", data);
export const sendOtp = (data) => axios.post("http://localhost:3000/api/auth/send-otp", data);
export const verifyOtp = (data) => axios.post("http://localhost:3000/api/auth/verify-otp", data);
export const resetPassword = (data) => axios.post("http://localhost:3000/api/auth/reset-password", data);
export const getProducts = (params) =>axios.get("http://localhost:3000/api/products", { params });

export const getFilterOptions = () => axios.get("http://localhost:3000/api/products/filters");

export const getProductBySKU = (sku) =>axios.get(`http://localhost:3000/api/products/sku/${sku}`);

export const getInventoryAnalytics = (sku) =>axios.get(`http://localhost:3000/api/products/inventory/analytics/${sku}`);

export const updateProductBySKU = (sku, data) =>axios.put(`http://localhost:3000/api/products/sku/${sku}`, data);
