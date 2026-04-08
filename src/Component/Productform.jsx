import { useState } from "react";

export default function Productform() {
  const [product, setProduct] = useState({
    product_name: "",
    product_price: "",
    product_description: "",
    product_category: "",
    product_image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product.product_name);
    formData.append("product_price", product.product_price);
    formData.append("product_description", product.product_description);
    formData.append("product_category", product.product_category);
    formData.append("product_image", product.product_image);

    fetch("https://backend-product-meiz.onrender.com/product", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        alert("Product Added Successfully!");
        console.log(data);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      {/* CSS inside same file */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f3f4f6;
        }

        .form-card {
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
        }

        .form-card h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #555;
          font-size: 14px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          outline: none;
          transition: 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 5px rgba(59,130,246,0.5);
        }

        .form-group input[type="file"] {
          border: none;
        }

        .submit-btn {
          width: 100%;
          padding: 10px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: 0.3s;
        }

        .submit-btn:hover {
          background: #2563eb;
        }
      `}</style>

      <div className="container">
        <form onSubmit={handleSubmit} className="form-card">
          <h2>Add Product</h2>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="product_name"
              value={product.product_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="product_price"
              value={product.product_price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="product_description"
              value={product.product_description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="product_category"
              value={product.product_category}
              onChange={handleChange}
              required
            >
              <option value="">--Select Category--</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
          </div>

          <div className="form-group">
            <label>Product Image</label>
            <input
              type="file"
              name="product_image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}