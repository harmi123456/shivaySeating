import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { chairsData } from './chairData';
import Header from './Header';
import Footer from './Footer';


//slider

const slides = [
  {
    image: "/img/cafe_chair1.jpeg",
    date: "26 December 2013",
    title: "Premium Café Chair – Modern & Stylish",
    description: "Ergonomically designed café chair with a sleek and comfortable finish. Perfect for coffee shops, restaurants, and home dining spaces. Durable, lightweight, and stylish."
  },
  {
    image: "/img/corpo_chair1.jpeg",
    date: "15 August 2024",
    title: "Corporate Office Chair – Ergonomic & Executive",
    description: "High-back corporate office chair with lumbar support and breathable mesh. Ideal for long working hours, ensuring comfort and productivity in office environments."
  },
  {
    image: "/img/executive3.jpeg",
    date: "10 March 2023",
    title: "Luxury Executive Chair – Leather & Adjustable",
    description: "Premium executive chair crafted with high-quality leather, 360° swivel, and height-adjustable features. A perfect blend of style and comfort for business professionals."
  }
];


//client satisfaction
const testimonials = [

  { id: 1, text: "Great service!", author: "Alice" },
  { id: 2, text: "Amazing experience!", author: "Bob" },
  { id: 3, text: "Highly recommended!", author: "Charlie" },
  { id: 4, text: "Superb support!", author: "David" },
  { id: 5, text: "Loved it!", author: "Emma" },

];


export default function Home() {

  const sliderRef = useRef(null);


  //slider

  const scrollAmount = 310;

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
      if (
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth
      ) {
        sliderRef.current.scrollLeft = 0;
      }
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount;
      if (sliderRef.current.scrollLeft <= 0) {
        sliderRef.current.scrollLeft =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, []);



  //chair data

  const [selectedCategory, setSelectedCategory] = useState("latest");

  // Filter chairs based on selected category
  const filteredChairs = chairsData.filter(chair => chair.category === selectedCategory);


  //split text

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const spans = document.querySelectorAll(".split-text span");
      spans.forEach((span, i) => {
        span.classList.remove("show");
        if (i <= index) {
          span.classList.add("show");
        }
      });
      index++;
      if (index > text.length) index = 0;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const text = "Ranger HB Revolving Chair";
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500); // Animation start delay
  }, []);



  //testimonal slider

  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Duplicate to ensure smooth loop

  // change chair 

  const [selectedColor, setSelectedColor] = useState("/img/chair1.png");

  const chairColors = [
    { color: "#7f9eb0", img: "/img/chair2.jpg" },
    { color: "#995e18", img: "/img/chair4.jpg" },
    { color: "#1e7998", img: "/img/chair1.png" },
    { color: "#afaeb0", img: "/img/chair3.jpg" },

  ];


  //like products


  const [likedProducts, setLikedProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("likedProducts")) || [];
  });

  const handleLike = (e, chair) => {
    e.preventDefault(); // Prevents navigation when clicking the heart icon

    setLikedProducts((prev) => {
      const updatedLikes = [...prev, chair];
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikes)); // Update localStorage
      return updatedLikes; // Update state
    });
  };


  //sec1 slider

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);



  return (

    <div>

      {/* //header */}
      <Header />

      <div className="container-fluid sec1">

        <div className="slider-container">
          {/* Image Container */}
          <div className="image-container">
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.image}
                alt="slide"
                className={`slide-image ${i === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>

          {/* Content Container */}
          <div className="content-container" key={activeIndex}>
            <p className="date">{slides[activeIndex].date}</p>
            <h2 className="title">{slides[activeIndex].title}</h2>
            <p className="description">{slides[activeIndex].description}</p>
          </div>

        </div>


      </div>


      {/* //sec2 */}

      <div className="container sec2 mt-5 ">

        <div className="shop">
          <h1>Our Wide Range <br />
            of Products</h1>
          <div className="red_line"></div>
          <p className='mt-2 ms-2' >200 + <br /> Unique Products</p>

          <Link to='/shop'>ALL CATEGORIES &nbsp; <i className="fa-solid fa-circle-chevron-right"></i></Link>
          <div className="black_line mt-2"></div>

        </div>


        <div className="category">

          {/* Scrollable Div Slider with Controls */}

          <button className="prev-btn" onClick={prevSlide}>
            ❮
          </button>

          <div className="scroll-container" ref={sliderRef}>

            <Link to='/AirSeries'>
              <div className="slide-box">
                <img src="img/Air-Series.png" alt="" />
                <h3>Air Series</h3>
              </div>
            </Link>

            <Link to='/BarStool'>
              <div className="slide-box">
                <img src="img/Bar-Stool-Series.png" alt="" />
                <h3>Bar Stool Series</h3>
              </div>
            </Link>

            <Link to='/ExecutiveSeries'>
              <div className="slide-box">
                <img src="img/Execitive-Series.png" alt="" />
                <h3>Execitive Series</h3>
              </div>
            </Link>

            <Link to='/PremiumSeries'>
              <div className="slide-box">
                <img src="img/Premium-Series.png" alt="" />
                <h3>Premium Series</h3>
              </div>
            </Link>

            <Link to='/VisitorSeries'>
              <div className="slide-box">
                <img src="img/Visitor-Series.png" alt="" />
                <h3>Visitor Series</h3>
              </div>
            </Link>

          </div>

          <button className="next-btn" onClick={nextSlide}>
            ❯
          </button>

        </div>

      </div>


      {/* //sec3 */}

      <div className="sec3 container mt-5">

        <div className="first">

          <div className="hot">
            <h1>Hot Products</h1>
            <div className="red_line"></div>
          </div>

          <div className="filter">
            <p
              onClick={() => setSelectedCategory("latest")}
              style={{ color: selectedCategory === "latest" ? "#9e1b32" : "black" }}
            >
              LATEST PRODUCTS
            </p>

            <p
              onClick={() => setSelectedCategory("topRated")}
              style={{ color: selectedCategory === "topRated" ? "#9e1b32" : "black" }}
            >
              TOP RATING
            </p>

            <p
              onClick={() => setSelectedCategory("bestSellers")}
              style={{ color: selectedCategory === "bestSellers" ? "#9e1b32" : "black" }}
            >
              BEST SELLERS
            </p>

          </div>

          <Link to='/shop' className="all">
            <div >
              <h6>All Products &nbsp; <i className="fa-solid fa-circle-chevron-right"></i> </h6>
            </div>
          </Link>


        </div>


        {/* Display Filtered Chairs */}

        <div className="second">

          {filteredChairs.map(chair => (
            <Link to={`/chair/${chair.id}`} key={chair.id} className="chair-card">

              <img src={chair.image} alt={chair.name} />
              <h5>{chair.name}</h5>
              {/* <p>{chair.price}</p> */}

              <div className="icons">
                <div className="chervon_right">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="heart_icon" onClick={(e) => handleLike(e, chair)}>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>


            </Link>
          ))}

        </div>


      </div>


      {/* //sec4 */}

      <div className="container-fluid sec4"></div>


      {/* //sec5 */}

      <div className="container-fluid sec5">

        <div className="chair">
          <img className="up-down fade-in" src={selectedColor} alt="Chair" />
        </div>

        <div className="content">
          <p><b>DESIGNED 2025</b></p>
          {/* <h1 className="split-text">Ranger HB Revolving Chair</h1> */}

          <h1 className="split-text">
            {text.split("").map((char, index) => (
              <span key={index} className={show ? "show" : ""}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p>Synchro mechanism with multi-position locking arrangement. Class-4 gas lift for seat height adjustment and wheel filled nylon castors for smooth movement of the chair. Warranty: 3-year warranty covered on castors, base, gas-lift & Mechanism.</p>

          <div className="color-options">
            {chairColors.map((item, index) => (
              <button
                key={index}
                className="color-btn"
                style={{ backgroundColor: item.color }}
                onClick={() => setSelectedColor(item.img)}
              ></button>
            ))}
          </div>
        </div>

      </div>

      {/* /sec6 */}

      <div className="container-fluid sec6 mt-5">
        <div className="stories">
          <p><b>OUR STORIES</b></p>
          <h1>We design <br />
            everything we make.</h1>
          <div className="red_line"></div> <br />
          <p>Welcome to our Shivay India! We are proud to offer a wide selection of high-quality chairs to meet your every need. Whether you’re looking for a comfortable office chair, a stylish accent chair, or a durable outdoor chair, we’ve got you covered.</p> <br /><br />
          <div className="about">
            <Link to='/aboutUs' >
              <h6>ABOUT US</h6>
            </Link>
          </div>
        </div>
      </div>


      {/* //sec7 */}

      <div className="container sec7 mt-5">

        <div className="heading">
          <h1>What Our Customers Say About Our Comfort & Style</h1>
          <div className="red_line mt-2"></div>
        </div>

        <div className="testimonial-container mt-4">
          <div className="marquee">
            <div className="marquee-content">
              {duplicatedTestimonials.map((t, index) => (
                <div key={index} className="testimonial-box">
                  <p>{t.text}</p>
                  <h4>- {t.author}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee marquee-rtl">
            <div className="marquee-content">
              {duplicatedTestimonials.map((t, index) => (
                <div key={index} className="testimonial-box">
                  <p>{t.text}</p>
                  <h4>- {t.author}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>


      {/* //sec8 */}
      <div className="container-fluid sec8 mt-5">

        <div className="heading">
          <h1>#ShivaySeatings</h1>
          <p>Discover how our customers have transformed their spaces with Shivay Seatings' premium chairs and sofas.</p>
          <div className="red_line mt-2"></div>
        </div>

        <div className="instagram mt-5">

          <Link to='https://www.instagram.com/p/C_Uid_UB3oj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' className='link_insta'>
            <img src="img/insta1.png" alt="" />
          </Link>

          <Link to='https://www.instagram.com/p/C-W5PvhMdMH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' className='link_insta'>
            <img src="img/insta4.png" alt="" />
          </Link>

          <Link to='https://www.instagram.com/p/C-oXGtCo3vR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' className='link_insta'>
            <img src="img/insta3.png" alt="" />
          </Link>

          <Link to='https://www.instagram.com/p/C_R3WuHoKoY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' className='link_insta'>
            <img src="img/insta5.png" alt="" />
          </Link>

          <Link to='https://www.instagram.com/p/C9_aLkOovWy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' className='link_insta'>
            <img src="img/insta2.png" alt="" />
          </Link>

        </div>

      </div>

      <Footer />

    </div>
  )
}
