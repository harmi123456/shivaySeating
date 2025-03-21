import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

export default function Footer() {
    return (
        <div>

            <footer className="footer ">
                <div className="footer-container">

                    {/* Left Section - Logo & Socials */}
                    <div className="footer-section logo-section">
                        <img src="/img/logo.png" alt="Shivay Seatings Logo" className="footer-logo" />
                        <p>Sophisticated simplicity for the independent mind.</p>
                        <div className="social-icons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Middle Section - Navigation */}
                    <div className="footer-section">
                        <h3>OUR PAGE</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutUs">About</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/contactUs">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Categories Section 1 */}
                    <div className="footer-section">
                        <h3> OUR SERIES</h3>
                        <ul>
                            <li><Link to="/AirSeries">Air Series</Link></li>
                            <li><Link to="/BarStool">Bar Stool Series</Link></li>
                            <li><Link to="/premium-series">Premium Series</Link></li>
                            <li><Link to="/ExecutiveSeries">Executive Series</Link></li>
                            <li><Link to="/VisitorSeries">Visitor Series</Link></li>
                        </ul>
                    </div>

                    {/* Categories Section 2 */}
                    <div className="footer-section">
                        <h3>CATEGORY</h3>
                        <ul>
                            <li><Link to="/chairs">Chairs</Link></li>
                            <li><Link to="/sofas">Sofa</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <p>© 2025 – Shivay Seatings</p>
                </div>
            </footer>

        </div>
    )
}
