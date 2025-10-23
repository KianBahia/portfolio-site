import React, { useState } from "react";
import CoolBackground from "./CoolBackground";
import StarBorder from "./StarBorder";
import ColorCustomizer from "./ColorCustomizer";
import profilePhoto from "../assets/images/profile/pfp.JPG";

const Hero = () => {
  const [isColorCustomizerOpen, setIsColorCustomizerOpen] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Cool Background */}
      <CoolBackground />

      {/* Settings Icon */}
      <button
        onClick={() => {
          console.log("Settings button clicked!");
          setIsColorCustomizerOpen(true);
        }}
        className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-md border border-white/20 hover:border-white/30 cursor-pointer"
        title="Customise Colours"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg animate-fade-in">
                <span className="text-[var(--primary-color)]">
                  Kian Hampson-Bahia
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                Computer Science Student
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <StarBorder
                onClick={scrollToProjects}
                color="#ff4444"
                speed="3s"
                thickness="2"
                className="rounded-lg"
              >
                View My Work
              </StarBorder>
              <a
                href="#about"
                className="px-8 py-3 border-2 border-white/50 text-white rounded-lg font-medium hover:bg-white/20 transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>

            <div className="pt-6">
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://github.com/KianBahia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kianbahia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Photo Container */}
              <div className="w-80 h-80 bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] overflow-hidden backdrop-blur-sm">
                <img
                  src={profilePhoto}
                  alt="Kian Hampson-Bahia"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--primary-40)] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[var(--secondary-40)] rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Customizer Modal */}
      <ColorCustomizer
        isOpen={isColorCustomizerOpen}
        onClose={() => setIsColorCustomizerOpen(false)}
      />
    </div>
  );
};

export default Hero;
