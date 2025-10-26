import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
        </div>

        <div className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-8 md:p-12 hover:border-[var(--primary-color)]/50 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Connect With Me on LinkedIn to Start a Conversation
            </h3>
            <div className="flex justify-center">
              <a
                href="https://linkedin.com/in/kianbahia"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] text-white font-semibold rounded-lg border-2 border-[var(--primary-30)] backdrop-blur-sm hover:border-[var(--primary-color)]/50 hover:from-[var(--primary-color)]/30 hover:to-[var(--secondary-color)]/30 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 text-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 c0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
