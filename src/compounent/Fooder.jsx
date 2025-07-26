import React from 'react';
import heroImg from '../image/Ariz.JPG';

const Fooder = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold text-gray-800">Muhammad Ariz</h1>
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About Me</a>
          <a href="#skills" className="hover:text-blue-600">Services</a>
        </nav>
        <div className="md:hidden text-2xl">☰</div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center px-6 py-16 bg-white">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <img
            src={heroImg}
            alt="Hero Section"
            className="h-[700px] w-auto max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hello there... I Am <span className="text-blue-600">Muhammad Ariz</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I Am Passionate Web App | Passionate React Developer dedicated to crafting user-friendly mobile applications that positively impact people's lives through innovative concepts.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/arizsalman"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              My Work
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ariz-salman-8a7419305"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fooder;


