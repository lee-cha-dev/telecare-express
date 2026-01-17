import React, { useState } from 'react';
import arizonaLogo from '../images/arizona_logo.jpg';
import arkansasLogo from '../images/arkansas_logo.jpg';

// ============================================
// STATE SELECTOR COMPONENT
// ============================================
function StateSelector() {
    const [selectedState, setSelectedState] = useState('');

    const states = [
        { code: 'AZ', name: 'Arizona', available: true, logo: arizonaLogo },
        { code: 'AR', name: 'Arkansas', available: true, logo: arkansasLogo }
    ];

    const handleStateSelect = (stateCode) => {
        setSelectedState(stateCode);
    };

    const handleContinue = () => {
        if (selectedState) {
            // Redirect to EMR (currently google.com as placeholder)
            window.location.href = 'https://www.google.com';
        }
    };

    return (
        <section id="states" className="state-selector">
            <div className="container">
                <div className="state-selector-content">
                    <div className="section-header">
                        <h2 className="section-title">Get Started Today</h2>
                        <p className="section-subtitle">
                            Select your state to access our telehealth services
                        </p>
                    </div>

                    <div className="state-cards">
                        {states.map((state) => (
                            <div
                                key={state.code}
                                className={`state-card ${selectedState === state.code ? 'state-card-selected' : ''} ${!state.available ? 'state-card-disabled' : ''}`}
                                onClick={() => state.available && handleStateSelect(state.code)}
                            >
                                <div className="state-card-content">
                                    <div className="state-icon">
                                        <img src={state.logo} alt={`${state.name} logo`} />
                                    </div>
                                    <h3 className="state-name">{state.name}</h3>
                                    <div className="state-code">{state.code}</div>
                                    {state.available && (
                                        <div className="state-available">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Available
                                        </div>
                                    )}
                                </div>
                                {selectedState === state.code && (
                                    <div className="state-card-checkmark">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" fill="currentColor"/>
                                            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="state-selector-actions">
                        <button
                            onClick={handleContinue}
                            disabled={!selectedState}
                            className="btn btn-primary btn-lg"
                        >
                            Continue to Patient Portal
                        </button>
                        <p className="state-selector-note">
                            By continuing, you will be redirected to our secure patient portal to complete registration or sign in.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StateSelector;