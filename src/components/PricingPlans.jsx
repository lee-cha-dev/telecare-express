// ============================================
// PRICING PLANS COMPONENT
// ============================================
import { plans } from "../config/Plans.js";

function PricingPlans() {
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
                        <div 
                            key={index} 
                            className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''} ${!plan.available ? 'pricing-card-coming-soon' : ''}`}
                        >
                            {plan.popular && <div className="pricing-badge">Most Popular</div>}
                            {!plan.available && <div className="pricing-badge pricing-badge-coming-soon">Coming Soon</div>}
                            <div className="pricing-header">
                                <h3 className="pricing-name">{plan.name}</h3>
                                <div className="pricing-price">
                                    <span className="pricing-currency">$</span>
                                    <span className="pricing-amount">{plan.price}</span>
                                    <span className="pricing-period">/{plan.period}</span>
                                </div>
                                {plan.yearlyPrice && (
                                    <div className="pricing-yearly">
                                        ${plan.yearlyPrice}/year
                                    </div>
                                )}
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
                                disabled={!plan.available}
                            >
                                {plan.available ? 'Choose Plan' : 'Coming Soon'}
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