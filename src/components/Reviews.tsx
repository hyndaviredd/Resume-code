import React, { useState } from "react";

const Reviews: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleViewAllReviews = () => {
    window.open(
      "https://www.linkedin.com/in/hyndhavi-reddy/",
      "_blank"
    );
  };

  const reviews = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Kirtivardhan",
      review:
        "It was great working with Hyndhavi. She is apt in what he does and does with a polite and professional attitude. She has revamped my resume and cover letter and optimized my profile as well. Would definitely recommend!",
      rating: 5,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "MONICA",
      review:
        "I really enjoyed working with Hyndhavi. She was very professional and prompt. During the entire process she communicated very well and was open to my suggestions as well. I would recommend using her to help with your resume and cover letters needs to enhance your job search.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Client Reviews & Testimonials
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our satisfied clients have
            to say about our professional resume writing services and how we've
            helped them achieve their career goals.
          </p>
        </div>

        {/* Review Cards */}
        <div className="space-y-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={review.image}
                    alt={review.name}
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-full object-cover cursor-pointer transition-all duration-300 ${
                      hoveredImage === review.id
                        ? "scale-150 z-10 shadow-2xl"
                        : "hover:scale-110"
                    }`}
                    onMouseEnter={() => setHoveredImage(review.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {review.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    "{review.review}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllReviews}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg
                     transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 
                     transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
