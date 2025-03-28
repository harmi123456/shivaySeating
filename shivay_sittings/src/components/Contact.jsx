import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Contact() {

  //for scroll on next page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      
      <div className="contact-us-form">

        <div className="form-container">

          <div className="form-1">
            <h1>Crafting Comfort with <br /> Elegance in Every Chair and Sofa</h1>
            <div className="lamp">
              <img src="/img/form-lamp1.png" alt="" />
            </div>
          </div>

          <form className="form-2">
            <input type="text" name="name" placeholder="Enter Name" required />
            <input type="email" name="email" placeholder="Enter Email" required />
            <div className="num">
              <input type="tel" name="phone" placeholder="Enter Mobile No" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button className="submit" type="submit">SUBMIT</button>
          </form>

          <div className="form-chair">
            <img src="/img/form-chair.png" alt="" />
          </div>

        </div>

      </div>

      
      <Footer />

    </div>
  )
}
