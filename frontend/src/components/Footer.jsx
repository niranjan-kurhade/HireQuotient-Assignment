import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>MilTon</h3>
                    <p>A brief description of the startup.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>123 Street Name, City, Country</p>
                    <p>Email: info@milton.com</p>
                    <p>Phone: +1234567890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} MilTon</p>
            </div>
        </footer>
    );
};

export default Footer;
