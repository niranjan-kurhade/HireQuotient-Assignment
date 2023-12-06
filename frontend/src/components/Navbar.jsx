import React from 'react';
import '../styles/Navbar.css';
import { IoMdArrowDropupCircle } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left-section">
                <div className="logo">{<IoMdArrowDropupCircle />}</div>
                <div className="logo-text">MilTon</div>
            </div>

            <div className="center-section">
                <ul className="nav-links">
                    <li><a href="/features">Features</a></li>
                    <li><a href="/testimonial">Testimonial</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/faqs">FAQs</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>

            <div className="right-section">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
