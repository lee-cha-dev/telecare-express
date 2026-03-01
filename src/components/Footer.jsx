import { useEffect, useRef } from 'react';
import LogoImage from "../../src/logo_image.png";

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer(
    {
        onNavigate
    }
) {
    const sealRef = useRef(null);

    useEffect(() => {
        const sealNode = sealRef.current;
        if (!sealNode) return;

        // Prevent duplicate injection in React StrictMode or re-renders.
        if (sealNode.querySelector('iframe[data-rapidscan-seal]')) return;

        const iframe = document.createElement('iframe');
        iframe.setAttribute('title', 'RapidScan Secure Seal');
        iframe.setAttribute('data-rapidscan-seal', 'true');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.className = 'seal-iframe';

        sealNode.appendChild(iframe);

        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;

        doc.open();
        doc.write(
            "<!doctype html><html><head><meta charset='utf-8'></head><body>" +
            "<script type='text/javascript' src='https://www.rapidscansecure.com/siteseal/siteseal.js?code=76,2146E693FAE174EE840B1B8B9E1D9C0FDA3D2414'></script>" +
            "</body></html>"
        );
        doc.close();

        return () => {
            iframe.remove();
        };
    }, []);

    useEffect(() => {
        const applySealClass = () => {
            // Check main document
            const mainImg = document.querySelector("img[alt='CompliAssure SiteSeal']");
            if (mainImg) {
                mainImg.classList.add('seal-image');
                return;
            }

            // Check inside the iframe we inject for the seal
            const iframe = sealRef.current?.querySelector('iframe[data-rapidscan-seal]');
            const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
            const iframeImg = doc?.querySelector("img[alt='CompliAssure SiteSeal']");
            if (iframeImg) {
                iframeImg.classList.add('seal-image');
            }
        };

        if (document.readyState === 'complete') {
            applySealClass();
        } else {
            window.addEventListener('load', applySealClass);
        }

        return () => {
            window.removeEventListener('load', applySealClass);
        };
    }, []);
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
                            <img src={LogoImage} className='logo-image' alt="TeleCare Express Logo" />
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
                            <li><strong>Support Site:</strong> <a target="_blank" href="http://help.rxnt.com">https://help.rxnt.com</a></li>
                            <li><strong>Sign In Support:</strong> <a href="tel:410-907-7976">410-907-7976</a></li>
                            <li><strong>Fax:</strong> 501-300-1871</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; 2025 TeleCare Express.
                    </p>
                    <div className='seal' ref={sealRef} />
                    <div className="footer-legal footer-copyright">
                        All rights reserved.
                        {/*<a href="#terms" onClick={(e) => handleSectionClick(e, 'terms')}>Terms of Service</a>*/}
                        {/*<a href="#hipaa" onClick={(e) => handleSectionClick(e, 'hipaa')}>HIPAA Notice</a>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
