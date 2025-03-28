import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


//sec2

const chairs = [
  {
    id: 1,
    name: "Ancient Wooden Throne",
    image: "img/corpo_chair2.jpeg",
    bgColor: "#6B4226",
  },
  {
    id: 2,
    name: "Classic Victorian Chair",
    image: "img/chair5.jpeg",
    bgColor: "#8C5A2B",
  },
  {
    id: 3,
    name: "Classic Victorian Chair",
    image: "img/chair8.jpeg",
    bgColor: "#343A40",
  },
  {
    id: 4,
    name: "Futuristic Hover Seat",
    image: "img/chair6.jpeg",
    bgColor: "#1B1F23",
  },
];



export default function ArtOfSitting() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIndex = Math.min(
        Math.floor(scrollY / 200), // Adjust sensitivity
        chairs.length - 1
      );
      setCurrentIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  //sec3

  const images = [
    "img/art1.jpg",
    "img/art2.jpg",
    "img/art3.jpg",
    "img/art4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 500); // Wait for fade-out effect before changing image
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  //sec4
  //flip card effect 

  const chairData = [
    {
      nowImg: "img/modernchair1.png",
      nowText: "Ergonomic Perfection",
      oldImg: "img/oldchair1.png",
      oldText: "Vintage Wooden Classic"
    },
    {
      nowImg: "img/modernchair2.png",
      nowText: "Luxury Recliner",
      oldImg: "img/oldchair2.png",
      oldText: "Antique Wooden Chair"
    },
    {
      nowImg: "img/modernchair3.png",
      nowText: "Minimalist Comfort",
      oldImg: "img/oldchair3.png",
      oldText: "Timeless Heritage Chair"
    },
    {
      nowImg: "img/modernchair4.png",
      nowText: "Office Productivity",
      oldImg: "img/oldchair4.png",
      oldText: "Retro Executive Chair"
    }
  ];

  return (
    <div>

      <Header />

      <div className=" art_sec1">

        <div className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Experience the Art of Sitting</h1>
            <p>Discover elegant chairs that blend comfort with creativity.</p>
            <motion.button
              className="explore-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to='/shop' style={{textDecoration:'none', color:'white'}}>Explore Collection</Link>
            </motion.button>
          </motion.div>

        </div>

      </div>

      <div className="art_sec2">

        <div className={`evolution-section`} style={{ backgroundColor: chairs[currentIndex].bgColor }} >
          <div className={`chair-container show`}>
            <img src={chairs[currentIndex].image} alt="Chair" />
            <h2 className="chair-info">{chairs[currentIndex].name}</h2>
          </div>
        </div>

        <div className="content">

          <ul className="chair-list">

            <li><strong>Ancient Wooden Throne:</strong> A royal antique chair crafted from solid wood with intricate carvings. Perfect for vintage decor and regal interiors. A timeless masterpiece that exudes heritage and sophistication. <em>Ideal for classic and luxury home styling.</em></li>

            <li><strong>Classic Victorian Chair:</strong> A luxurious Victorian-style chair with plush upholstery and carved wood details. Adds elegance to any classic home setting. The perfect blend of comfort and aristocratic charm. <em>Best choice for elegant and historical interiors.</em></li>

            <li><strong>Modern Ergonomic Chair:</strong> A stylish ergonomic chair with lumbar support and a sleek design. Designed for maximum comfort and long working hours. Ideal for offices, home workspaces, and professional setups. <em>Perfect for productivity and back support.</em></li>

            <li><strong>Futuristic Hover Seat:</strong> A sleek, innovative chair with a minimalist futuristic design. A blend of modern aesthetics and next-gen seating comfort. Built for those who embrace the future of interior design. <em>A must-have for a high-tech, modern lifestyle.</em></li>

            <li><strong>Luxury Leather Recliner:</strong> A premium leather chair with reclining features and soft cushioning. Designed for relaxation and comfort with an elegant touch. <em>Best for home theaters, lounges, and executive offices.</em></li>

          </ul>

        </div>

      </div>


      <div className="art_sec3">

        <div className="text-content">

          <h1>Art of Seating: Elevate Comfort with Style & Ergonomics</h1>
          <p>
            <b>Art of Seating</b> redefines comfort with <b>luxury, ergonomic support, and timeless designs.</b> Every chair is <b>crafted for posture perfection,</b> ensuring a blend of <b>style, durability, and premium materials.</b> Whether you prefer <b>modern aesthetics</b> or <b>classic charm,</b> our seating solutions enhance <b>both comfort and interior appeal.</b>

            Designed for <b>optimal lumbar support</b>, our collection promotes <b>healthy sitting posture</b>, reducing fatigue during long hours. From <b>executive office chairs</b> to <b>luxury recliners</b> and <b>stylish home decor seating</b>, experience <b>pain-free seating</b> with unmatched craftsmanship.

            Our <b>ergonomic chairs</b> are engineered with **advanced cushioning, breathable fabrics, and adaptive height adjustments**, ensuring the <b>perfect fit for your workspace or living area.</b> Whether you need a <b>sleek office chair for productivity</b> or a **cozy armchair for relaxation**, our designs seamlessly blend **functionality with elegance.**

            With a focus on **premium materials like genuine leather, high-density foam, and sustainable wood**, we bring you **seating solutions that last for years.** Our chairs not only offer **superior comfort** but also add a **touch of sophistication** to any interior.

            Elevate your space with <b>ergonomic innovation, sophisticated design, and lasting comfort.</b> **Invest in the art of sitting well!**
          </p>

        </div>

        <div className="art_img">
          <img
            src={images[currentImage]}
            alt="Art of Seating"
            className={fade ? "fade-in" : "fade-out"}
          />
        </div>

      </div>


      <div className="art_sec4">
        <div className="seating-evolution">
          <h2>Seating Evolution: Then vs. Now</h2>
          <div className="chair-grid">
            {chairData.map((chair, index) => (
              <div key={index} className="chair-container">
                <div className="chair-card">
                  <div className="chair-front">
                    <img src={chair.nowImg} alt="Modern Chair" />
                    <div className="chair-text">{chair.nowText}</div>
                  </div>
                  <div className="chair-back">
                    <img src={chair.oldImg} alt="Old Chair" />
                    <div className="chair-text">{chair.oldText}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

    </div >
  )
}
