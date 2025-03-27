import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { Premium_Series } from './chairData';

export default function PremiumSeries() {

  // Initialize liked products from localStorage
  const [likedProducts, setLikedProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("likedProducts")) || [];
  });

  // Sync liked products to localStorage whenever state updates
  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const handleLike = (e, chair) => {
    e.preventDefault(); // Prevents navigation when clicking the heart icon

    setLikedProducts((prev) => {
      if (prev.some(item => item.id === chair.id)) return prev; // Avoid duplicates

      const updatedLikes = [...prev, chair];
      return updatedLikes; // Update state (useEffect will handle localStorage update)
    });
  };

  return (
    <div>
      <Header />

      <div className="sec3 container mt-5">
        <div className="second">
          {Premium_Series.map(chair => (
            <Link to={`/chair/${chair.id}`} key={chair.id} className="chair-card">
              <img src={chair.image} alt={chair.name} />
              <h5>{chair.name}</h5>

              <div className="icons">
                <div className="chervon_right">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="heart_icon" onClick={(e) => handleLike(e, chair)}>
                  <i className={`fa-solid fa-heart ${likedProducts.some(item => item.id === chair.id) ? 'liked' : ''}`}></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>

  )
}
