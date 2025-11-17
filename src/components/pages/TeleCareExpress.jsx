import React from 'react';

import Header from '../Header';
import Features from "../Features.jsx";
import PricingPlans from "../PricingPlans.jsx";
import StateSelector from "../StateSelector.jsx";
import Footer from "../Footer.jsx";
import Hero from "../Hero.jsx";

// ============================================
// MAIN APP COMPONENT
// ============================================
export function TeleCareExpress() {
    return (
        <div className="telecare-app">
            <Header/>
            <Hero/>
            <Features/>
            <PricingPlans/>
            <StateSelector/>
            <Footer/>
        </div>
    );
}