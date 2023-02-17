import React, { useState, useEffect } from 'react';
import "./index.css"

function ScrollToTopButton({ scrollThreshold = 300 }) {
    const [isVisible, setIsVisible] = useState(false);

    function handleScroll() {
        if (window.pageYOffset > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollThreshold]);

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={handleClick}
        >
            Scroll To Top
        </button>
    );
}

export default ScrollToTopButton;
