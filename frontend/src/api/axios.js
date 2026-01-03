import axios from "axios";

const API_URL = "https://contact-management-backend-ten.vercel.app/api";

const api = axios.create({
  baseURL: API_URL,
});

export const createContact = (data) => api.post("/create", data);

export const getContacts = () => api.get("/");

export const updateContact = (id, data) => api.put(`/${id}`, data);

export const deleteContact = (id) => api.delete(`/${id}`);

export default api;
