import React from "react";

const ResumeSamples: React.FC = () => {
  const handleViewSamples = () => {
    window.open(
      "https://drive.google.com/drive/folders/1mW9KuIt0AVT1BcvSnsrJbieYskfozckZ?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="resume-samples" className="py-20 bg-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Professional Resume Samples
        </h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Explore our collection of professionally crafted resume templates and
          samples that have helped thousands of job seekers land their dream
          jobs. In the end, you'll receive multiple formats of both resumes and
          cover letters to suit your needs.
        </p>

        <button
          onClick={handleViewSamples}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg
                   transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 
                   transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Resume Samples
        </button>
      </div>
    </section>
  );
};

export default ResumeSamples;
