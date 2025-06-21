import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 cursor-pointer relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('resume-samples')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 cursor-pointer relative group"
            >
              Resume Samples
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 cursor-pointer relative group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 cursor-pointer relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Desktop Get Started Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('get-started')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 
                       transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 ml-auto"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="py-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('resume-samples')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              Resume Samples
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              FAQ
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('get-started')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;