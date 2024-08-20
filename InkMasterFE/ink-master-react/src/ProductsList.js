import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API từ ASP.NET Core .NET 8
    axios.get('https://localhost:7246/api/products')
      .then(response => {
        setProducts(response.data); // Lưu dữ liệu từ API vào state
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;