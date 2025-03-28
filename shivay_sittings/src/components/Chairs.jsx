import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { chairsData2 } from './chairData'

export default function Chairs() {

  //for scroll on next page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredChair, setHoveredChair] = useState(null);

  return (
    <div>

      <Header />

      <div className="chair_sec1">

        <section className="hero-section mt-5">
          <h1 className="hero-title mt-5">Discover The Best Chairs</h1>
          <p className="hero-subtext">Modern • Comfortable • Elegant</p>

          <div className="glass-cards mb-5">

            <div className="glass-card">
              <img src="/img/chair2.png" alt="" />
              Corporate Chairs
            </div>

            <div className="glass-card">
              <img src="/img/Bar-Stool-Series.png" alt="" />
              Café Chairs
            </div>

            <div className="glass-card">
              <img src="/img/executive2.jpeg" alt="" />
              Executive Chairs
            </div>

          </div>

        </section>

      </div>


      <div className="container-fluid chair_sec2 mt-5 ">

        <h2 className="section-heading">Explore Our Exclusive Chair Collection</h2>

        <div className="chairs-container mt-5">
          {chairsData2.map((char) => (
            <div
              key={char.id}
              className="chair-card"
              onMouseEnter={() => setHoveredChair(char.id)}
              onMouseLeave={() => setHoveredChair(null)}
            >
              <img
                src={hoveredChair === char.id ? char.hoverImage : char.image}
                alt={char.name}
                className="chair-image"
              />
              <h5 className="chair-name">{char.name}</h5>
              <p className="chair-description">{char.description}</p>
              <div className="icons">
                <div className="heart_icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="chervon_right">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
      
    </div>
  )
}
