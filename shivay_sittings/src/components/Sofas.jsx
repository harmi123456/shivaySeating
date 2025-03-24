import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { sofasData } from './chairData';
import { Link } from 'react-router-dom';

export default function Sofas() {
  const [scrollStage, setScrollStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 600) {
        setScrollStage(2); // Final Position (Dusre Section me)
      } else if (scrollY > 50) {
        setScrollStage(1); // Move Start
      } else {
        setScrollStage(0); // Initial Floating
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid sofa_sec1">
        <div className="main-container">
          {/* First Section */}
          <div className="sofa-section">
            <div className={`sofa-container stage-${scrollStage}`}>
              <div className="sofa"></div>
              <div className="chair chair-left"></div>
              <div className="chair chair-right"></div>
            </div>
          </div>

        </div>
      </div>


      {/* //sofa section2 */}

      <div className="container-fluid chair_sec2 mt-5 ">

        <h2 className="section-heading">Explore Our Exclusive Sofa Collection</h2>

        <div className="chairs-container mt-5">

          {sofasData.map((sofa) => (
            <Link to={`/chair/${sofa.sofa_id}`} key={sofa.sofa_id} className="chair-card" >

              <div>
                <img src={sofa.image} alt={sofa.name} className="chair-image" />
                <h5 className="chair-name">{sofa.name}</h5>
                <p className="chair-description">{sofa.description}</p>
                <div className="icons">
                  <div className="heart_icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="chervon_right">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>


      </div>

      <Footer />

    </div>
  );
}
