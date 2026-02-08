// ============================================
// FOOTER COMPONENT
// ============================================
function Footer(
    {
        onNavigate
    }
) {
    const handleFaqClick = (e) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate('faq');
            window.scrollTo(0, 0);
        }
    };

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();

        const section = document.getElementById(sectionId);

        if (section) {
            // Section exists on current page, scroll to it
            section.scrollIntoView({ behavior: 'smooth' });
        } else if (onNavigate) {
            // Section doesn't exist, navigate to the home and then scroll
            onNavigate('home');
            // Wait for navigation and DOM update, then scroll
            setTimeout(() => {
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <svg className="footer-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7V12C2 16.97 5.75 21.56 12 23C18.25 21.56 22 16.97 22 12V7L12 2Z" fill="currentColor" opacity="0.2"/>
                                <path d="M12 2L2 7V12C2 16.97 5.75 21.56 12 23C18.25 21.56 22 16.97 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>TeleCare Express</span>
                        </div>
                        <p className="footer-tagline">
                            Quality healthcare at your fingertips. Serving Arizona and Arkansas with compassionate, convenient telehealth services.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#features" onClick={(e) => handleSectionClick(e, 'features')}>Features</a></li>
                            <li><a href="#pricing" onClick={(e) => handleSectionClick(e, 'pricing')}>Pricing</a></li>
                            <li><a href="#states" onClick={(e) => handleSectionClick(e, 'states')}>Get Started</a></li>
                            <li><a href="#faq" onClick={handleFaqClick}>FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><a href="https://justlabs.health" target="_blank" >Just Labs</a></li>
                            <li><a href="https://costplusdrugs.com" target="_blank" >CostPlus Drugs</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-links">
                            <li><strong>Email:</strong> support@telecareexpress.com</li>
                            <li><strong>Portal Support:</strong> 1-800-TELECARE</li>
                            <li><strong>Fax:</strong> 501-300-1871</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; 2025 TeleCare Express. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#terms" onClick={(e) => handleSectionClick(e, 'terms')}>Terms of Service</a>
                        <a href="#hipaa" onClick={(e) => handleSectionClick(e, 'hipaa')}>HIPAA Notice</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;