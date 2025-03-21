import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>

            <header>

                <div className="bars" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fa-solid fa-bars-staggered"></i>
                </div>

                <div className="logo"></div>

                <div className={`navlinks ${menuOpen ? "open" : ""}`}>

                    {/* Close Icon */}
                    <span className="close-icon" onClick={() => setMenuOpen(false)}>×</span>

                    <Link to='/'>Home</Link>
                    <Link to='/aboutUs'>About Us</Link>

                    {/* Dropdown */}
                    <div className="dropdown">

                        <span className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)} >
                            Shop
                        </span>

                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <Link to="/chairs">Chairs</Link>
                                <Link to="/sofas">Sofas</Link>
                            </div>
                        )}

                    </div>

                    <Link to='/artOfSitting'>Art Of Sittings</Link>
                    <Link to='/contactUs'>Contact Us</Link>

                </div>

                <div className="quote">
                    <Link to='/contactUs'>Get A Quote</Link>
                </div>

            </header>

        </div>

    )
}
