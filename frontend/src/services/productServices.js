import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// Get all products
export const getProducts = () => {
  return axios.get(API_URL);
};

// Add a new product
export const addProduct = (product) => {
  return axios.post(API_URL, product);
};

// Update a product
export const updateProduct = (id, product) => {
  return axios.put(`${API_URL}/${id}`, product);
};

// Delete a product
export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};