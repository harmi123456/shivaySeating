import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { products } from './chairData';
import { useNavigate } from 'react-router-dom';

export default function Shop() {

  //for scroll on next page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //sec1
  const [activeIndex, setActiveIndex] = useState(1);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };


  //sec2
  const [category, setCategory] = useState("chair");

  // Filter products based on selected category
  const filteredProducts = products.filter((item) => item.category === category);

  const navigate = useNavigate("");


  //sec3

  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);

  // Product select karne ka function
  const handleSelect = (e, setProduct) => {
    const selectedProduct = products.find((item) => item.id === parseInt(e.target.value));
    setProduct(selectedProduct);
  };


  return (
    <div>

      <Header />

      <div className="shop_sec1">

        <div className="gallery">
          {["executive3.jpeg", "sofa4.jpg", "corpo_chair1.jpeg", "sofa2.jpg"].map(
            (img, index) => (
              <img
                key={index}
                src={`/img/${img}`}
                alt=""
                className={activeIndex === index ? "active" : ""}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            )
          )}
        </div>

      </div>


      <div className="shop_sec2">

        <div className="shop-container">
          {/* Category Buttons */}
          <div className="category-buttons">
            <button onClick={() => setCategory("chair")} className={category === "chair" ? "active" : ""}>Chairs</button>
            <button onClick={() => setCategory("sofa")} className={category === "sofa" ? "active" : ""}>Sofas</button>
          </div>

          {/* Product Showcase */}
          <div className="product-gallery">
            {filteredProducts.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          {/* Explore More Button */}

          {/* Explore More Button (Conditional) */}
          {category === "chair" && <button className="explore-btn" onClick={() => navigate("/chairs")} >Explore More Chairs</button>}
          {category === "sofa" && <button className="explore-btn" onClick={() => navigate("/sofas")} >Explore More Sofas</button>}

        </div>


      </div>


      <div className="shop_sec3">

        <div className="compare-section">
          <h2>Compare Products 🆚</h2>

          {/* Product Selection */}
          <div className="product-select">
            <select onChange={(e) => handleSelect(e, setProduct1)}>
              <option value="">Select Product 1</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>

            <select onChange={(e) => handleSelect(e, setProduct2)}>
              <option value="">Select Product 2</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* Comparison Table */}
          {product1 && product2 && (
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>{product1.name}</th>
                  <th>{product2.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price</td>
                  <td>${product1.price}</td>
                  <td>${product2.price}</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>{product1.material}</td>
                  <td>{product2.material}</td>
                </tr>
                <tr>
                  <td>Comfort Level</td>
                  <td>{product1.comfort}</td>
                  <td>{product2.comfort}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>⭐ {product1.rating}</td>
                  <td>⭐ {product2.rating}</td>
                </tr>
              </tbody>
            </table>
          )}

        </div>

      </div>

      <Footer />

    </div>
  )
}
