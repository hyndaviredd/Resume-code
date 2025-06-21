import React from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "Is this a trusted service?",
      answer: "Yes, absolutely",
    },
    {
      id: 2,
      question: "ATS-friendly resumes?",
      answer: "YES, guaranteed",
    },
    {
      id: 3,
      question: "Is lifetime updating included?",
      answer: "Yes, lifetime updates are provided",
    },
    {
      id: 4,
      question:
        "Will I receive my resume and cover letter in multiple formats?",
      answer: "YES",
    },
    {
      id: 5,
      question: "Is price negotiable?",
      answer: "Yes, slightly negotiable",
    },
    {
      id: 6,
      question: "How long does it take?",
      answer: "24-48 hours",
    },
    {
      id: 7,
      question: "Do you offer revisions?",
      answer: "YES, unlimited",
    },

    {
      id: 8,
      question: "Cover letter included?",
      answer: "Optional add-on",
    },
    {
      id: 9,
      question: "LinkedIn optimization?",
      answer: "Available separately",
    },
    {
      id: 10,
      question: "Industry-specific writing?",
      answer: "YES, all industries",
    },
    {
      id: 11,
      question: "Money-back guarantee?",
      answer: "Yes, 100%! Unlimited revisions until you're satisfied",
    },
    {
      id: 12,
      question: "Rush delivery available?",
      answer: "YES, 12 hours",
    },
    {
      id: 13,
      question: "Free consultation?",
      answer: "No",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here’s everything you need to know about our resume services. Find
            quick answers to common questions about our professional resume
            writing process, helping you make an informed decision before
            getting started. These are also some of the most frequently asked
            questions we discuss with clients during the resume service process.
          </p>
        </div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl p-8 border-2 border-gradient-to-r from-blue-200 to-purple-200 
                         hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 
                         transition-all duration-300 hover:scale-105 transform 
                         relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                borderImage: "linear-gradient(135deg, #3b82f6, #8b5cf6) 1",
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between space-x-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                      {faq.question}
                    </h3>

                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
