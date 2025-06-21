import React from "react";

const Footer: React.FC = () => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300 text-lg">
            Designed and built with passion © {currentYear}. Inspired by
            Harinath.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
