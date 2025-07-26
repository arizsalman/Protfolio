import React from 'react';
import Ariz from '../image/Ariz.JPG';

const Detail = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
            👨‍💻 About Me
          </h2>
          <p className="text-xl text-gray-700 mb-6 font-semibold">
            Senior Mobile & Web App Developer
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I specialize in creating high-quality Mobile and Web Apps for clients worldwide.
            From social media apps and quiz platforms to educational tools and custom solutions,
            I bring your ideas to life with clean code and user-focused design.
          </p>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p><strong>Birthday:</strong> 24-Oct-2002</p>
              <p><strong>Age:</strong> 24 Yr</p>
              <p><strong>Residence:</strong> Pakistan</p>
              <p><strong>Address:</strong> Karachi, Pakistan</p>
            </div>
            <div>
              <p><strong>Email:</strong> muhammadarizsalman@gmail.com</p>
              <p><strong>Phone:</strong> +92 311 3811042</p>
              <p><strong>GitHub:</strong> /arizsalman</p>
              <p><strong>Freelance:</strong> Available</p>
            </div>
          </div>

          {/* Download CV */}
          <div className="mt-6">
            <a
              href="/Muhammad_Ariz_Salman_Resume.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={Ariz}
            alt="Ariz Salman"
            className="rounded-2xl w-full max-w-sm h-auto object-cover shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
