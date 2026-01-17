import React, {useState, useMemo, useEffect, useRef} from 'react';
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import {faqData} from "../../config/FAQData.js";


// ============================================
// FAQ COMPONENT
// ============================================
function FAQ({onNavigate}) {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const faqItemRefs = useRef([]);

    const categories = [
        {id: 'all', label: 'All Questions'},
        {id: 'getting-started', label: 'Getting Started'},
        {id: 'services', label: 'Services & Treatments'},
        {id: 'pricing', label: 'Pricing & Insurance'},
        {id: 'technology', label: 'Technology & Privacy'},
        {id: 'prescriptions', label: 'Prescriptions'}
    ];

    // Filter FAQs based on search query and category
    const filteredFaqs = useMemo(() => {
        return faqData.filter(item => {
            const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
            const matchesSearch = searchQuery === '' ||
                item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, activeCategory]);

    const toggleFaq = (index) => {
        // If closing the same item, just close it
        if (openIndex === index) {
            setOpenIndex(null);
            return;
        }

        // If another item is open, close it first and wait for collapse
        if (openIndex !== null) {
            setOpenIndex(null);

            // Wait for collapse animation to finish, then open new item and scroll
            setTimeout(() => {
                setOpenIndex(index);

                // Now scroll after the new state is set
                requestAnimationFrame(() => {
                    const element = faqItemRefs.current[index];
                    if (element) {
                        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                        const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            }, 350); // Match this to your CSS transition duration
        } else {
            // No item is open, just open and scroll
            setOpenIndex(index);

            requestAnimationFrame(() => {
                const element = faqItemRefs.current[index];
                if (element) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    };

    const clearSearch = () => {
        setSearchQuery('');
        setActiveCategory('all');
        setOpenIndex(null);
    };

    // Format answer text with markdown-like styling
    const formatAnswer = (text) => {
        return text.split('\n').map((line, i) => {
            // Headers
            if (line.startsWith('**') && line.endsWith('**')) {
                return <h4 key={i} className="faq-answer-heading">{line.replace(/\*\*/g, '')}</h4>;
            }
            // Bold text within lines
            if (line.includes('**')) {
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return (
                    <p key={i} className="faq-answer-text">
                        {parts.map((part, j) =>
                            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                        )}
                    </p>
                );
            }
            // List items
            if (line.startsWith('- ') || line.startsWith('✓ ')) {
                return <li key={i} className="faq-answer-list-item">{line.substring(2)}</li>;
            }
            // Table rows (simplified handling)
            if (line.startsWith('|') && line.endsWith('|')) {
                return null; // Skip table formatting for simplicity
            }
            // Empty lines become spacing
            if (line.trim() === '') {
                return <br key={i}/>;
            }
            // Regular paragraphs
            return <p key={i} className="faq-answer-text">{line}</p>;
        });
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, []);

    return (
        <div className="telecare-app">
            <Header
                onNavigate={onNavigate}
                mainPage={false}
            />
            <section id="faq" className="faq">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">
                            Find answers to common questions about TeleCare Express. Can't find what you're looking for?
                            Contact our support team.
                        </p>
                    </div>

                    {/* Search Box */}
                    <div className="faq-search-container">
                        <div className="faq-search-box">
                            <svg className="faq-search-icon" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <input
                                type="text"
                                className="faq-search-input"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search FAQ"
                            />
                            {searchQuery && (
                                <button className="faq-search-clear" onClick={clearSearch} aria-label="Clear search">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="faq-categories">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`faq-category-btn ${activeCategory === category.id ? 'faq-category-btn-active' : ''}`}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setOpenIndex(null);
                                }}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    {(searchQuery || activeCategory !== 'all') && (
                        <div className="faq-results-info">
                            <span>Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'}</span>
                            {searchQuery && <span> for "{searchQuery}"</span>}
                            {activeCategory !== 'all' && (
                                <span> in {categories.find(c => c.id === activeCategory)?.label}</span>
                            )}
                            <button className="faq-clear-filters" onClick={clearSearch}>
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* FAQ List */}
                    <div className="faq-list">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((item, index) => (
                            <div
                                key={index}
                                ref={el => faqItemRefs.current[index] = el}
                                className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <div className="faq-question-content">
                                        <span className="faq-category-tag">
                                            {categories.find(c => c.id === item.category)?.label}
                                        </span>
                                            <span className="faq-question-text">{item.question}</span>
                                        </div>
                                        <svg
                                            className="faq-icon"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d={openIndex === index ? "M5 15L12 8L19 15" : "M19 9L12 16L5 9"}
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <div className="faq-answer">
                                        <div className="faq-answer-content">
                                            {formatAnswer(item.answer)}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="faq-no-results">
                                <svg className="faq-no-results-icon" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="currentColor" strokeWidth="2"/>
                                    <path d="M9 9H9.01M15 9H15.01M8 14C8.5 15.5 10 17 12 17C14 17 15.5 15.5 16 14"
                                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <h3>No results found</h3>
                                <p>We couldn't find any questions matching your search. Try different keywords or browse
                                    all categories.</p>
                                <button className="btn btn-secondary" onClick={clearSearch}>
                                    View All Questions
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="faq-contact">
                        <div className="faq-contact-content">
                            <div className="faq-contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="faq-contact-text">
                                <h3>Still have questions?</h3>
                                <p>Our support team is available 24/7 to help you with any questions or concerns.</p>
                            </div>
                            <div className="faq-contact-actions">
                                <a href="mailto:support@telecareexpress.com" className="btn btn-primary">
                                    Email Support
                                </a>
                                <a href="tel:1-800-TELECARE" className="btn btn-secondary">
                                    Call 1-800-TELECARE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer onNavigate={onNavigate}/>
        </div>
    );
}

export default FAQ;