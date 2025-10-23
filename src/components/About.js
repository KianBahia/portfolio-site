import React from "react";

const About = ({ aboutData }) => {
  return (
    <div id="about" className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and interests
          </p>
        </div>

        {/* About Cards Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Who I Am Card - Large */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-8 hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {aboutData.bio}
                </p>
              </div>
            </div>

            {/* Hobbies & Interests Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-6 hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <h3 className="text-xl font-bold text-white mb-4">
                  Hobbies & Interests
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {aboutData.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--primary-color)]/30 text-[var(--primary-color)] rounded-lg border border-[var(--primary-30)] text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>

                {/* Languages Section */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Languages
                  </h4>
                  <div className="space-y-2">
                    {aboutData.languages.map((language, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center px-3 py-2 bg-[var(--primary-color)]/30 text-[var(--primary-color)] rounded-lg border border-[var(--primary-30)]"
                      >
                        <span className="font-medium">{language.name}</span>
                        <span className="text-sm font-medium">
                          {language.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card - Full width below */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-8 hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aboutData.skills.map((skillCategory, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="text-lg font-semibold text-[var(--primary-color)]">
                        {skillCategory.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-red-900/20 text-red-200 rounded-lg text-sm font-medium border border-red-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section - Purple Glass Style */}
        {aboutData.certificates && aboutData.certificates.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Certificates & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutData.certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-6 hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)]/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary-color)]/40 transition-colors">
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
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-[var(--primary-color)] font-medium mb-1">
                        {cert.issuer}
                      </p>
                      {cert.date && (
                        <p className="text-gray-400 text-sm">{cert.date}</p>
                      )}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--primary-color)]/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[var(--secondary-color)]/40 rounded-full animate-pulse delay-1000 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
