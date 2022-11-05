import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaWindowClose, FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const openMobileNav = () => {
        setMobileNavOpen(true)
    }
    const closeMobileNav = () => {
        setMobileNavOpen(false)
    }

    return (
        <>
            <div className={`${!isMobileNavOpen ? 'mobile-nav' : 'mobile-nav open_mobile-nav'}`}>
                <div className="mobile-header">
                    <button className="mobile-nav_close-btn" id="close_menu-btn" onClick={closeMobileNav}>
                        <FaWindowClose />
                    </button>

                </div>

                <div className="mobile-nav_list">
                    <Link to="hero" spy={true} smooth={true} offset={-130} duration={500} onClick={closeMobileNav}>Home</Link>
                    <Link to="about" spy={true} smooth={true} offset={-130} duration={500} onClick={closeMobileNav}>About</Link>
                    <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileNav}>Projects</Link>
                    <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileNav}>Contact</Link>
                </div>
            </div>


            <div className="reg-nav-section">
                <div className="nav-container">
                    <div className="brand">Derrion Malik Hall</div>
                    <div className="nav-link-container">
                        <Link to="hero" spy={true} smooth={true} offset={-130} duration={500}>Home</Link>
                        <Link to="about" spy={true} smooth={true} offset={-130} duration={500} >About</Link>
                        <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>Projects</Link>
                        <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} >Contact</Link>
                    </div>

                    <div className="open_nav-button" onClick={openMobileNav}>
                        <button className='bars-button'><FaBars /></button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Navbar