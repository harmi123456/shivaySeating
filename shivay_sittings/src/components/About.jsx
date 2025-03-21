import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const steps = [
  { id: 1, title: "Wood Cutting & Framing", desc: "We use high-quality wood to create a durable and sturdy frame.", img: "/img/woodwork.jpg" },
  { id: 2, title: "Cushioning & Padding", desc: "Premium foam and padding are used for ultimate comfort.", img: "/img/cushioning.jpg" },
  { id: 3, title: "Upholstery & Stitching", desc: "High-quality fabrics and skilled stitching bring elegance.", img: "/img/upholstery.jpg" },
  { id: 4, title: "Finishing & Quality Check", desc: "Each piece undergoes strict quality checks before delivery.", img: "/img/finishing.jpg" },
];


export default function About() {

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000); // Auto-progress every 3 sec
    return () => clearInterval(interval);
  }, []);


  return (
    <div>

      <Header />

      {/* //sec1 */}

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


      {/* //sec2 */}

      <div className="container-fluid about_sec2 mt-5">

        <h1 className='mt-5 text-center'>The Secret Behind Our Excellence</h1>

        <div className="choose mt-0 ">

          <div className="special">
            <img src="/img/experiance.gif" alt="" />
            <h3>Several Years Of Experiance</h3>
          </div>

          <div className="special">
            <img src="/img/quality.gif" alt="" />
            <h3>Premium Quality Material</h3>
          </div>

          <div className="special">
            <img src="img/colour.png" alt="" />
            <h3>Custom Design & Innovation</h3>
          </div>

          <div className="special">
            <img src="/img/customer.gif" alt="" />
            <h3>1000+ Customer Satisfaction</h3>
          </div>

        </div>

      </div>


      {/* //sec3 */}

      <div className="container-fluid about_sec3">

        <section className="craftsmanship">
          <div className="container">
            <h2 className="section-title"> Our Craftsmanship & Process</h2>
            <p className="section-subtitle">Experience the art of fine sofa & chair manufacturing, crafted with passion and precision.</p>

            <div className="progress-container">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`progress-step ${index === activeStep ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="circle">{index + 1}</div>

                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <img src={step.img} alt={step.title} />
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>



      <Footer />
    </div>
  )
}
