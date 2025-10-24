import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-auto px-3">
        {/* glass navbar shell */}
        <div className="mt-3 relative">
          {/* Glass front layer only */}
          <div
            className="relative rounded-3xl px-8 py-3 flex items-center gap-8"
            style={{
              backgroundColor: "hsla(0, 0%, 100%, 0.15)",
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
              backdropFilter: "blur(0.75em)",
              WebkitBackdropFilter: "blur(0.75em)",
            }}
          >
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium relative"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium relative"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium relative"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium relative"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-white/90 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div
                className="flex flex-col gap-3 rounded-2xl px-6 py-4"
                style={{
                  backgroundColor: "hsla(0, 0%, 100%, 0.15)",
                  boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
                  backdropFilter: "blur(0.75em)",
                  WebkitBackdropFilter: "blur(0.75em)",
                }}
              >
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium w-full text-left py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium w-full text-left py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium w-full text-left py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/90 hover:text-white hover:font-bold transition-all duration-200 text-sm font-medium w-full text-left py-2"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
