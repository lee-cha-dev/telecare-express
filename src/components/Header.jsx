import React, { useState } from 'react';
import LogoImage from '../../src/logo_image.png';

// ============================================
// HEADER COMPONENT
// ============================================
function Header(
    {
        onNavigate,
        mainPage = true
    }
) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <a
                        href="#"
                        className="logo"
                        onClick={(e) => {
                            e.preventDefault();
                            if (onNavigate) {
                                onNavigate('home');
                                window.scrollTo(0, 0);
                            }
                        }}
                    >
                        {/*<svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path d="M12 2L2 7V12C2 16.97 5.75 21.56 12 23C18.25 21.56 22 16.97 22 12V7L12 2Z" fill="currentColor" opacity="0.2"/>*/}
                        {/*    <path d="M12 2L2 7V12C2 16.97 5.75 21.56 12 23C18.25 21.56 22 16.97 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2"/>*/}
                        {/*    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                        {/*</svg>*/}
                        <img src={LogoImage} alt="TeleCare Express Logo" className="logo-image" />
                        <span className="logo-text">
                            <p className='logo-first'>TeleCare</p>
                            <p className='logo-second'>Express</p>
                        </span>
                    </a>

                    {
                        mainPage &&
                            <>
                                <button
                                    className="mobile-menu-button"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    aria-label="Toggle menu"
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                                    <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
                                    <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
                                    <button onClick={() => scrollToSection('states')} className="nav-link">Get Started</button>
                                </nav>
                            </>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;