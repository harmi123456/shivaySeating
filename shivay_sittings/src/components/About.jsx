import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

const steps = [
  { id: 1, title: "Wood Cutting & Framing", desc: "We use high-quality wood to create a durable and sturdy frame.", img: "/img/wood.jpg" },
  { id: 2, title: "Cushioning & Padding", desc: "Premium foam and padding are used for ultimate comfort.", img: "/img/cusion.jpg" },
  { id: 3, title: "Upholstery & Stitching", desc: "High-quality fabrics and skilled stitching bring elegance.", img: "/img/stitch.jpg" },
  { id: 4, title: "Finishing & Quality Check", desc: "Each piece undergoes strict quality checks before delivery.", img: "/img/quality.jpeg" },
];


export default function About() {

  //for scroll on next page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <Link to='/shop'>
            <button className="btn hero-btn">Explore Our Collection</button>
          </Link>
          
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



      {/* //sec4 */}

      <div className="container-fluid about_sec4">

        <section className="production-house container my-5">

          <div className="text-center mb-5">
            <h2 className="section-title">Inside Our Production House</h2>
            <p className="section-subtitle">
              Where Innovation Meets Craftsmanship – Delivering quality, precision, and durability.
            </p>
          </div>

          {/* Manufacturing Process */}
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-md-6 fabric_img">
              <img
                src="/img/fabric2.jpg"
                alt="Production House"
                className="img-fluid rounded"
              />
            </div>

            {/* Steps */}

            <div className="steps-container">
              {/* Step 1 */}
              <div className="step-box">
                <div className="step-circle">1</div>
                <div className="step-content">
                  <h4 className="step-title">Premium Materials Selection</h4>
                  <p className="step-desc">Using high-quality wood, foam, and fabrics.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-box">
                <div className="step-circle">2</div>
                <div className="step-content">
                  <h4 className="step-title">Skilled Craftsmanship</h4>
                  <p className="step-desc">Our artisans ensure perfection in every design.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-box">
                <div className="step-circle">3</div>
                <div className="step-content">
                  <h4 className="step-title">Advanced Machinery</h4>
                  <p className="step-desc">Cutting-edge machines for precision and durability.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="step-box">
                <div className="step-circle">4</div>
                <div className="step-content">
                  <h4 className="step-title">Strict Quality Checks</h4>
                  <p className="step-desc">Every product is tested for durability and comfort.</p>
                </div>
              </div>
            </div>



          </div>

          {/* Video & Sustainability */}
          <div className="row align-items-center mt-5">
            <div className="col-md-6">
              <h3 className="sub-title">Behind the Scenes</h3>
              <p className="sub-desc">
                Take a look at how we create top-quality chairs and sofas in our production house.
              </p>
              <video className="w-100 rounded shadow-lg mt-3" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="col-md-6">
              <div className="info-box p-4">
                <h3 className="sub-title">Sustainability & Responsibility</h3>
                <p className="sub-desc">
                  We are committed to eco-friendly practices by using sustainable materials and responsible waste management.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>♻️ Recycling & Waste Management</li>
                  <li>🌱 Sustainable Material Sourcing</li>
                  <li>🔬 Eco-Friendly Production Processes</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

      </div>


      {/* //sec5 */}

      <div className="container-fluid about_sec5">

        <div className="mission-wrapper">
          {/* Background Blobs */}
          <div className="blob-container">
            <div className="blob one"></div>
            <div className="blob two"></div>
            <div className="blob three"></div>
          </div>

          <h2 className="mission-title">WE DESIGN FURNITURE</h2>

          <div className="mission-cards">
            <div className="mission-box">
              <h3 className="mission-heading">Our Mission</h3>
              <p className="mission-desc">
                Research and innovate to introduce ergonomic, stylish, and comfortable furniture solutions.
              </p>
            </div>

            <div className="mission-box">
              <h3 className="mission-heading">Innovation & Design</h3>
              <p className="mission-desc">
                Address sitting posture problems and create adaptable furniture solutions.
              </p>
            </div>

            <div className="mission-box">
              <h3 className="mission-heading">Eco-Friendly Approach</h3>
              <p className="mission-desc">
                We ensure sustainability by using environmentally friendly materials and processes.
              </p>
            </div>

            <div className="mission-box">
              <h3 className="mission-heading">Customer Satisfaction</h3>
              <p className="mission-desc">
                Craft furniture with precision and care, delivering unparalleled comfort and durability.
              </p>
            </div>
          </div>
        </div>

      </div>



      <Footer />
      
    </div>
  )
}
