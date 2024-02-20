// ProductForm.js

import React, { useState } from "react";
import "./ProductForm.css";
const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, productDetails]);
    setProductDetails({
      name: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={handleInputChange}
        />

        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={productDetails.price}
          onChange={handleInputChange}
        />

        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={productDetails.quantity}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>

      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price} - {product.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductForm;
