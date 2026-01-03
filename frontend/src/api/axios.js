import axios from "axios";

const API_URL = 'http://localhost:7000/api/contacts';

const api = axios.create({
  baseURL: API_URL,
});

export const createContact = (data) => api.post("/create", data);

export const getContacts = () => api.get("/");

export const updateContact = (id, data) => api.put(`/${id}`, data);

export const deleteContact = (id) => api.delete(`/${id}`);

export default api;
