import React, { useState, useEffect } from 'react';

const Arrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('contact');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Show arrow when footer is visible in viewport
                const isFooterVisible = footerRect.top < windowHeight && footerRect.bottom > 0;
                setIsVisible(isFooterVisible);
            }
        };

        // Check initial state
        handleScroll();
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    };

    return (
        <img 
            className={`arrow ${isVisible ? 'visible' : ''}`}
            src="/arrow.png" 
            alt="Back to top arrow" 
            onClick={scrollToTop}
        />
    );
};

export default Arrow;
