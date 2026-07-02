import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductForm({ addProduct, updateProduct, editProduct }) {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });

  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct);
    }
  }, [editProduct]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      product.name === "" ||
      product.price === "" ||
      product.category === "" ||
      product.description === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }

    setProduct({
      name: "",
      price: "",
      category: "",
      description: ""
    });
  };

  return (
    <div className="container">

      <h2> Product Details</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          {editProduct ? "Update Product" : "Add Product"}
        </button>

        <br /><br />

        <Link to="/products">
          <button type="button">View Products</button>
        </Link>

      </form>

    </div>
  );
}

export default ProductForm;