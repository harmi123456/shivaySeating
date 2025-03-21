import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <div>
      
      <Header />

      <div className="container-fluid about_sec1 mt-0">

        <div className="container text-center hero-content">
          <h1 className="hero-title">Crafting Comfort & Elegance</h1>
          <p className="hero-subtitle">
            The Best Sofa & Chair Manufacturer in Morbi – Quality, Craftsmanship, & Innovation.
          </p>
          <a href="/shop">
            <button className="btn hero-btn">Explore Our Collection</button>
          </a>
        </div>

      </div>


      <Footer />
    </div>
  )
}
