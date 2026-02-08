// ============================================
// HERO COMPONENT
// ============================================
function Hero() {
    const scrollToStates = () => {
        const element = document.getElementById('states');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Quality Healthcare,<br />
                        <span className="hero-title-accent">Anytime, Anywhere</span>
                    </h1>
                    <p className="hero-subtitle">
                        Connect with licensed healthcare providers in Arizona and Arkansas from the comfort of your home.
                        Fast, convenient, and affordable telehealth services.
                    </p>
                    <div className="hero-buttons">
                        <button onClick={scrollToStates} className="btn btn-primary btn-lg">
                            Get Started Today
                        </button>
                        <button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                                className="btn btn-secondary btn-lg">
                            View Pricing
                        </button>
                    </div>
                    <div className="hero-badges">
                        <div className="badge">
                            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>HIPAA Compliant</span>
                        </div>
                        <div className="badge">
                            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>24/7 Portal Access</span>
                        </div>
                        <div className="badge">
                            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Licensed Providers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
