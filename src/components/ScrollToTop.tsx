import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                   p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 
                   transition-all duration-300 hover:scale-110 transform active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   animate-bounce hover:animate-none group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
          
          {/* Pulse Ring Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
                        opacity-30 animate-ping group-hover:animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm 
                        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        whitespace-nowrap pointer-events-none">
            Back to Top
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 
                          border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;