import React, { useState } from 'react'
import logo from '../images/logo.svg'
import '../App.css'

function Header() {
    const [nav, setNav] = useState(false)
    const toggle = () => setNav(!nav)
    return (
        <header>
            <div className="header-container">
                <a href="#"><img src={logo} alt="manage" /></a>
                <nav className="nav-container">
                    <button className="hamburger" onClick={toggle}></button>
                    <ul className={ nav ? "mobile-nav-links" : "desktop-nav"}>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                    <div className="mobile-nav-bg">
                        <ul className="mobile-nav-links">
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#" className="cta-button">Get Started</a></li>
                        </ul>
                    </div>
                </nav>
                <a href="#" className="cta-button">Get Started</a>
            </div>
        </header>
    )
}

export default Header
