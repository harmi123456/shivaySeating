import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const navigate = useNavigate();

    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem("likedProducts")) || [];
        setLikedProducts(storedLikes);
    }, []);
    
    const handleLikeClick = (chair) => {
        navigate("/liked-products"); 
        const updatedLikes = [...likedProducts, chair];
        setLikedProducts(updatedLikes);
        localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    };


    return (
        <div>

            <header>

                <div className="bars" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fa-solid fa-bars-staggered"></i>
                </div>

                <div className="logo1">
                    <img src="/img/logo3.png" alt="" />
                </div>


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

                    <div className="logo">
                        <img src="/img/logo3.png" alt="" />
                    </div>

                    <Link to='/artOfSitting'>Art Of Sittings</Link>
                    <Link to='/contactUs'>Contact Us</Link>

                </div>

                <div className="like-icon" onClick={handleLikeClick}>
                    <i className="fa-regular fa-heart"></i>
                    {likedProducts.length > 0 && <span className="like-badge">{likedProducts.length}</span>}

                </div>

            </header>

        </div>

    )
}
