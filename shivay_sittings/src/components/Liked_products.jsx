import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Liked_products() {

  //for scroll on next page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [likedProducts, setLikedProducts] = useState([]);


  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(storedLikes);
  }, []);


  return (
    <>

      <Header />

      <div className="liked-products-section">
        <h2 className="liked-title">❤️ Liked Products</h2>
        {likedProducts.length === 0 ? (
          <p className="empty-message">No liked products yet! Start exploring.</p>
        ) : (
          <div className="liked-container">
            {likedProducts.map((chair) => (
              <div key={chair.id} className="liked-card">
                <img src={chair.image} alt={chair.name} className="liked-img" />
                <h5 className="liked-name">{chair.name}</h5>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />

    </>

  )
}
