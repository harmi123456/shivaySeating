import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { sofasData } from './chairData';
import { Link } from 'react-router-dom';

export default function Sofas() {

  //for scroll on next page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //sec1

  const [swap, setSwap] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSwap((prev) => !prev);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <Header />

      <div
        className={`sofa_sec1 ${swap ? "swap" : ""} ${hover ? "hover" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src="/img/sofa_back.png" alt="sofa" className="floating-item item1" />
        <img src="/img/chair_back.png" alt="chair" className="floating-item item2" />
        <img src="/img/sofa2_back.png" alt="sofa" className="floating-item item3" />
        <img src="/img/chair2_back.png" alt="chair" className="floating-item item4" />
        <img src="/img/chair3_back.png" alt="chair" className="floating-item item5" />

        <img src="/img/sofa3_back.png" alt="sofa" className="floating-item item6" />
        <img src="/img/chair4_back.png" alt="chair" className="floating-item item7" />
        <img src="/img/sofa4_back.png" alt="sofa" className="floating-item item8" />
        <img src="/img/chair5_back.png" alt="chair" className="floating-item item9" />
        <img src="/img/chair6_back.png" alt="chair" className="floating-item item10" />

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
