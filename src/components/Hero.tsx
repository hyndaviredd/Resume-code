import React from "react";
import { CheckCircle, Star, Users, Award } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewSamples = () => {
    window.open("https://drive.google.com/drive/folders/1mW9KuIt0AVT1BcvSnsrJbieYskfozckZ?usp=sharing", "_blank");
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Land Your Dream Job with a
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Perfect ATS Resume, Cover Letter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our professional resume writing services are designed to help you
            stand out and get hired faster. We create ATS-optimized resumes,
            compelling cover letters, and optimized LinkedIn profiles that
            capture the attention of both screening systems and hiring managers.
            With a fast 24–48 hour turnaround, unlimited revisions, and 24/7
            expert support from experienced writers, we ensure every document is
            tailored for maximum impact and complete satisfaction.{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("get-started")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg
                             transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 
                             transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Start Your Resume
            </button>
            <button
              onClick={handleViewSamples}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg
                             hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105
                             transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View Samples
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">24hrs</div>
              <div className="text-gray-600">Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
