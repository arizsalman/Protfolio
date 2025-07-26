import React from 'react';

const services = [
  {
    title: 'Web React/Next.js Apps',
    description:
      'Building high-performance React and Next.js apps that are optimized for speed, SEO, and scalability — perfect for startups and businesses.',
  },
  {
    title: 'Frontend Web Apps',
    description:
      'Crafting responsive and interactive frontend experiences that look great and perform smoothly on all screen sizes and devices.',
  },
  {
    title: 'Web Development Services',
    description:
      'Delivering modern web solutions with clean code, RESTful APIs, and pixel-perfect UI using best development practices.',
  },
];

const Cantact_Us = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-20 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        {/* 🎯 Stylish Heading */}
        <h2 className="text-5xl font-extrabold text-orange-500 mb-4 tracking-tight leading-tight drop-shadow-sm">
            My Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 font-medium">
          Jnr. Web & Mobile App Developer
        </p>

        {/* 🧱 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 h-[300px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-orange-50 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* 🔗 Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-base">
              Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/muhammad-ariz-salman-8a7419305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cantact_Us;
