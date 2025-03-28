import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Sofas() {

  //for scroll on next page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  //sec2

  const sofas = [
    { img: "/img/16.jpg", title: "Luxury Recliner Sofa", description: "Comfortable and stylish recliner sofa with premium leather finish." },
    { img: "/img/sofa9.jpg", title: "Modern Sectional Sofa", description: "Perfect for large living spaces, comes with modular sections." },
    { img: "/img/4(1).png", title: "Classic Wooden Sofa", description: "Elegant wooden frame with soft cushions for extra comfort." },
    { img: "/img/sofa10.jpg", title: "Contemporary Fabric Sofa", description: "Soft fabric upholstery with a sleek modern design." },
  ];


  return (
    <div>
      <Header />

      <div className="chair_sec1">

        <section className="hero-section mt-5">
          <h1 className="hero-title mt-5">Discover The Best Sofa</h1>
          <p className="hero-subtext">Modern • Comfortable • Elegant</p>

          <div className="glass-cards mb-5">

            <div className="glass-card">
              <img src="/img/sofa_18.jpg" alt="Luxury Recliner Sofa" />
              Luxury Recliner Sofa
            </div>

            <div className="glass-card">
              <img src="/img/sofa6.jpg" alt="Classic Wooden Sofa" />
              Modern Leather Sofa
            </div>

            <div className="glass-card">
              <img src="/img/sofa_20.jpg" alt="Modern Leather Sofa" />
              Classic Wooden Sofa
            </div>

          </div>
        </section>

      </div>


      <div className="sofa_sec2">

        <section className="flip-card-section">
          <h2 className="section-title">Explore Our Sofa Collection</h2>
          <div className="flip-card-container">
            {sofas.map((sofa, index) => (
              <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={sofa.img} alt={sofa.title} />
                  </div>
                  <div className="flip-card-back">
                    <h3>{sofa.title}</h3>
                    <p>{sofa.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>


      <div className="sofa_sec3">

        <div class="container-fluid">

          <div class="row">

            <div class="col col-12 col-xl-8 col-md-6 col-sm-12" id="img1"> </div>

            <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img2"></div>

            <div class="col col-12 col-xl-3 col-md-6 col-sm-12" id="img3"> </div>

            <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img4"></div>

            <div class="col col-12 col-xl-3 col-md-6 col-sm-12" id="img5"></div>

            <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img6"></div>

            <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img7"></div>

            <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img8"></div>

            <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img9"></div>

            <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img10"></div>

            <div class="col col-12 col-xl-3 col-md-6 col-sm-12" id="img3"></div>

            <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img4"></div>

            <div class="col col-12 col-xl-3 col-md-6 col-sm-12" id="img5"></div>

            <div class="col col-12 col-xl-8 col-md-6 col-sm-12" id="img11"></div>

            <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img12"></div>

            <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img6"></div>

            <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img7"></div>

            <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img13"></div>

            <div class="col col-12 col-xl-8 col-md-6 col-sm-12" id="img14"></div>

          </div>



        </div>


      </div>

      <Footer />

    </div>
  );
}
