import React from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

const GetStarted: React.FC = () => {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/hyndhavi-reddy/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      bgColor: "bg-blue-50",
      description: "Connect with us professionally",
    },
    {
      id: 2,
      name: "Instagram",
      icon: Instagram,
      url: "https://www.linkedin.com/in/hyndhavi-reddy/",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
      bgColor: "bg-pink-50",
      description: "Connect with us professionally",
    },
    {
      id: 3,
      name: "Email",
      icon: Mail,
      url: "mailto:hyndhavireddy7@gmail.com",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      bgColor: "bg-green-50",
      description: "Connect with us professionally",
    },
  ];

  const handleSocialClick = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <section
      id="get-started"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            To Get Started
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your career? Connect with us through your
            preferred platform and let's create a resume that opens doors to
            your dream job.
          </p>
        </div>

        {/* Social Media Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <div
                key={social.id}
                onClick={() => handleSocialClick(social.url)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`${social.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200`}
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>

                    {/* Pulse Animation Ring */}
                    <div
                      className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${social.color} opacity-20 animate-pulse group-hover:animate-ping`}
                    ></div>
                  </div>

                  {/* Social Media Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {social.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {social.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div
                    className={`mt-4 h-1 bg-gradient-to-r ${social.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}
                  ></div>
                </div>

                {/* Floating Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Choose your preferred way to connect with us and let's begin
              crafting your perfect resume, Cover Letter today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
