// ============================================
// PRICING PLANS COMPONENT
// ============================================
function PricingPlans() {
    const plans = [
        {
            name: 'Pay Per Visit',
            price: 49,
            period: 'per visit',
            description: 'Perfect for occasional healthcare needs',
            features: [
                'One telehealth visit',
                'E-prescription included',
                'Access to licensed providers',
                'Same-day appointments',
                'Secure video consultation',
                'Medical records access'
            ],
            popular: true
        },
        {
            name: 'Advanced Visit',
            price: 69,
            period: 'per visit',
            description: 'Moderate complexity conditions requiring more detailed evaluation and follow-up',
            features: [
                'Including all features from Pay Per Visit',
                'Lab ordering and review',
                'X-ray ordering and review',
                'Hospital records review'
            ],
            popular: false
        },
        {
            name: 'Chronic or Transitional Care Management',
            price: '45-85',
            period: 'per month',
            description: 'Complex or multiple conditions requiring comprehensive assessment and monthly care coordination',
            features: [
                'Multiple concurrent health concerns',
                'Chronic condition management',
                'Lab review and treatment planning',
                'Mental health consultations',
                'Comprehensive medication reviews'
            ],
            popular: false
        }
        // {
        //     name: 'Family Plan',
        //     price: 79,
        //     period: 'per month',
        //     visits: '10 visits/month',
        //     description: 'Comprehensive care for your whole family',
        //     features: [
        //         'Up to 10 visits per month',
        //         'Coverage for up to 6 family members',
        //         'Unlimited provider messaging',
        //         'Pediatric care included',
        //         'Mental health support',
        //         'Chronic condition management',
        //         'Priority 24/7 support',
        //         'Annual wellness checks for all'
        //     ],
        //     popular: false,
        //     available: false
        // },
    ];

    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Flexible Pricing Plans</h2>
                    <p className="section-subtitle">
                        Choose the plan that best fits your healthcare needs and budget
                    </p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
                            {plan.popular && <div className="pricing-badge">Most Popular</div>}
                            <div className="pricing-header">
                                <h3 className="pricing-name">{plan.name}</h3>
                                <div className="pricing-price">
                                    <span className="pricing-currency">$</span>
                                    <span className="pricing-amount">{plan.price}</span>
                                    <span className="pricing-period">/{plan.period}</span>
                                </div>
                                {plan.visits && <div className="pricing-visits">{plan.visits}</div>}
                                <p className="pricing-description">{plan.description}</p>
                            </div>
                            <ul className="pricing-features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="pricing-feature">
                                        <svg className="pricing-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => document.getElementById('states').scrollIntoView({ behavior: 'smooth' })}
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-block`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
                <div className="pricing-note">
                    <p>All plans include HIPAA-compliant security, secure messaging, and access to your medical records. No hidden fees.</p>
                </div>
            </div>
        </section>
    );
}

export default PricingPlans;