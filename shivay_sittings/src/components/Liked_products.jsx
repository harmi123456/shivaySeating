import React, { useEffect, useState } from 'react'

export default function Liked_products() {

  const [likedProducts, setLikedProducts] = useState([]);


  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(storedLikes);
  }, []);


  return (
    <div>
      <h2>Liked Products</h2>
      <div className="liked-container">
        {likedProducts.map((chair) => (
          <div key={chair.id} className="liked-card">
            <img src={chair.image} alt={chair.name} />
            <h5>{chair.name}</h5>
          </div>
        ))}
      </div>
    </div>

  )
}
