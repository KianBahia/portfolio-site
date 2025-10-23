import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      firstName: "",
      surname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </div>

        <div className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-8 md:p-12 hover:border-[var(--primary-color)]/50 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--primary-30)] bg-[var(--primary-color)]/10 text-white rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 placeholder-gray-400 autofill:bg-[var(--primary-color)]/10"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label
                  htmlFor="surname"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Surname *
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--primary-30)] bg-[var(--primary-color)]/10 text-white rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 placeholder-gray-400 autofill:bg-[var(--primary-color)]/10"
                  placeholder="Enter your surname"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[var(--primary-30)] bg-[var(--primary-color)]/10 text-white rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 placeholder-gray-400 autofill:bg-[var(--primary-color)]/10"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-[var(--primary-30)] bg-[var(--primary-color)]/10 text-white rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 resize-none placeholder-gray-400"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] text-white font-semibold rounded-lg border-2 border-[var(--primary-30)] backdrop-blur-sm hover:border-[var(--primary-color)]/50 hover:from-[var(--primary-color)]/30 hover:to-[var(--secondary-color)]/30 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info - Purple Glass Style */}
          <div className="mt-12 pt-8 border-t border-[var(--primary-30)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3 group">
                <div className="w-12 h-12 bg-[var(--primary-color)]/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-[var(--primary-color)]/40 transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--primary-color)]"
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
                </div>
                <h3 className="font-semibold text-white group-hover:text-[var(--primary-color)] transition-colors">
                  Email
                </h3>
                <p className="text-[var(--primary-color)]">
                  your.email@example.com
                </p>
              </div>

              <div className="space-y-3 group">
                <div className="w-12 h-12 bg-[var(--secondary-color)]/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-[var(--secondary-color)]/40 transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--secondary-color)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white group-hover:text-[var(--secondary-color)] transition-colors">
                  Phone
                </h3>
                <p className="text-[var(--secondary-color)]">
                  +1 (555) 123-4567
                </p>
              </div>

              <div className="space-y-3 group">
                <div className="w-12 h-12 bg-[var(--primary-color)]/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-[var(--primary-color)]/40 transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--primary-color)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white group-hover:text-[var(--primary-color)] transition-colors">
                  Location
                </h3>
                <p className="text-[var(--primary-color)]">
                  Your City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
