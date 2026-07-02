import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ProductForm from "./components/productForm";
import ProductList from "./components/productList";

import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from "./services/productServices";

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  const handleAddProduct = async (product) => {
    await addProduct(product);
    alert("Product Added Successfully");
    loadProducts();
  };

  const handleUpdateProduct = async (product) => {
    await updateProduct(product._id, product);
    alert("Product Updated Successfully");
    setEditProduct(null);
    loadProducts();
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    alert("Product Deleted Successfully");
    loadProducts();
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  return (
    <Routes>

      <Route
        path="/"
        element={
          <ProductForm
            addProduct={handleAddProduct}
            updateProduct={handleUpdateProduct}
            editProduct={editProduct}
          />
        }
      />

      <Route
        path="/products"
        element={
          <ProductList
            products={products}
            editProduct={handleEditProduct}
            deleteProduct={handleDeleteProduct}
          />
        }
      />

    </Routes>
  );
}

export default App;