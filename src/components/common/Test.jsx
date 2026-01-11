import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
       console.log(data.products);

      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {products?.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 10,
            }}
          >
        
        {
          product.thumbnail ? (    <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: 8,
              }}
            />)
            :
            (    <img
              src={product.images[0]}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: 8,
              }}
            />)
        }
            
            <h4>{product.brand} {product.title}</h4>
            <p style={{ fontSize: 13, color: "#666" }}>
              {product.category}
            </p>
            <p>{product.description}</p>
            <p>
              <b>${product.price}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
