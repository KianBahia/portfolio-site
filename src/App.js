import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { projects, aboutData } from "./data";
import "./App.css";

function App() {
  return (
    <div className="App relative min-h-screen" style={{ color: "#f3f4f6" }}>
      <Navbar />
      <Hero />
      <Projects projects={projects} />
      <About aboutData={aboutData} />
      <Contact />

      {/* Footer - Purple Glass Style */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-8 text-center">
            <p className="text-[var(--primary-color)] font-medium">
              © {new Date().getFullYear()} Kian Hampson-Bahia. All rights
              reserved.
            </p>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--primary-color)]/40 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[var(--secondary-color)]/40 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
