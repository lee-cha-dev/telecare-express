export const plans = [
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
        popular: true,
        available: true
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
        popular: false,
        available: true
    },
    {
        name: 'Chronic or Transitional Care Management',
        price: '45-85',
        period: 'per month',
        // yearlyPrice: '480-960',  // Example: add yearly price when applicable
        description: 'Complex or multiple conditions requiring comprehensive assessment and monthly care coordination',
        features: [
            'Multiple concurrent health concerns',
            'Chronic condition management',
            'Lab review and treatment planning',
            'Mental health consultations',
            'Comprehensive medication reviews'
        ],
        popular: false,
        available: true
    },
    {
        name: 'Individual Plan',
        price: 35,
        period: 'per month',
        yearlyPrice: 350,
        visits: '4 visits/year',
        description: 'Comprehensive care for your individual needs.',
        features: [
            'One wellness visit per year',
            'Three telehealth visits* per year',
            'Unlimited virtual visits*',
            '20% discount on all additional telehealth visits',
            'Unlimited provider messaging',
            'Priority 24/7 support',
        ],
        popular: false,
        available: true
    },
    {
        name: 'Family Plan',
        price: 79,
        period: 'per month',
        yearlyPrice: 850,
        visits: '4 visits per member/year',
        description: 'Comprehensive care for your whole family',
        features: [
            'One wellness visit per member per year',
            'Three telehealth visits* per member per year',
            'Unlimited virtual visits*',
            'Coverage for up to 4 family members',
            '20% discount on all additional telehealth visits',
            'Unlimited provider messaging',
            'Pediatric care included*',
            'Priority 24/7 support',
        ],
        popular: false,
        available: true
    },
    {
        name: 'Premium Individual Plan',
        price: 125,
        period: 'per month',
        yearlyPrice: 1200,
        visits: 'Unlimited visits/year',
        description: 'Comprehensive care for your complex health needs.',
        features: [
            'One wellness check every quarter, totalling four per year',
            'Unlimited telehealth visits*',
            'Unlimited virtual visits*',
            'Includes chronic care services',
            'Includes weight management services',
            'Unlimited provider messaging',
            'Priority 24/7 support',
        ],
        popular: false,
        available: true
    },
];