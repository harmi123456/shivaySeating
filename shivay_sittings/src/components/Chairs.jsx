import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { chairsData2 } from './chairData'
import { motion } from "framer-motion";

export default function Chairs() {

  const [hoveredChair, setHoveredChair] = useState(null);

  return (
    <div>
      <Header />

      <div className="container-fluid chair_sec1">

        <section className="hero-section mt-5">
          <h1 className="hero-title mt-5">Discover The Best Chairs</h1>
          <p className="hero-subtext">Modern • Comfortable • Elegant</p>

          <div className="glass-cards mb-5">

            <div className="glass-card">
              <img src="/img/chair_67.jpg" alt="" />
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


      <div className="container-fluid chair_sec3">
        {/* Neck Pain Image with Hover Effect */}
        <motion.div
          className="pain_box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="nack_pain">
            <img src="/img/neckpain.avif" alt="Neck Pain" />
            <div className="overlay">
              <h1>Neck Pain Relief Solutions</h1>
              <p>We design ergonomic office chairs that reduce neck strain and improve posture.</p>
              <p>Say goodbye to neck pain with our scientifically designed headrests and lumbar support.</p>
              <p>Enhance your work efficiency with our chairs, built for all-day comfort and support.</p>
            </div>
          </div>
        </motion.div>

        {/* Back Pain Image with Hover Effect */}
        <motion.div
          className="pain_box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="back_pain">
            <img src="/img/backpain.avif" alt="Back Pain" />
            <div className="overlay">
              <h1>Back Pain Support & Tips</h1>
              <p>Experience superior comfort with our orthopedic back support chairs.</p>
              <p>Designed for long hours – our chairs promote spine health and reduce back pain.</p>
              <p>Ergonomic lumbar support ensures perfect posture, preventing discomfort and fatigue.</p>
            </div>
          </div>
        </motion.div>
      </div>


      <Footer />
    </div>
  )
}
