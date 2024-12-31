import React, { useEffect } from 'react';
import aboutimg from '../../assets/about.webp'
import { Link } from 'react-router-dom';
const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - GadgetHaven';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-700 ">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <h1 className="text-center text-5xl font-extrabold drop-shadow-md">
          About Us
        </h1>
        <p className="text-center mt-4 text-lg">
          Your trusted destination for all things tech.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-700 mb-9">
            Welcome to GadgetHaven
          </h2>
        <div className="mt-6">
            <img
              src={aboutimg}
              alt="Technology Illustration"
              className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-[450px]"
            />
          </div>
         
          <p className="text-lg leading-relaxed mt-6">
            At GadgetHaven, we bridge the gap between you and cutting-edge technology.
            Explore a curated selection of gadgets designed to enhance your lifestyle.
          </p>
    
        </section>

        {/* Our Mission Section */}
        <section className="flex flex-col md:flex-row items-center mb-12 bg-slate-300 rounded-xl p-4">
          <div className="md:w-1/2 px-6 mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-purple-700 mb-4">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed">
              Our mission is to simplify technology shopping. We combine innovation, 
              quality, and exceptional customer service to deliver an unparalleled 
              shopping experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/realistic-technology-background_52683-73672.jpg?ga=GA1.1.94081497.1723952170&semt=ais_hybrid"
              alt="Mission Illustration"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 shadow-lg">
          <h3 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
            Why Choose Us?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <li className="flex items-center">
              <span className="bg-blue-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-check"></i>
              </span>
              Wide range of premium gadgets.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-check"></i>
              </span>
              Competitive prices and exclusive deals.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-check"></i>
              </span>
              Fast and secure shipping.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 text-white p-3 rounded-full mr-4">
                <i className="fas fa-check"></i>
              </span>
              Dedicated customer support.
            </li>
          </ul>
        </section>
      </main>

      {/* Call to Action */}
      <section className="bg-pink-200 text-black py-12 ">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl font-bold mb-4">
            Ready to Explore the Latest Gadgets?
          </h4>
          <p className="text-lg">
            Join our community and stay ahead with the best tech solutions tailored for you.
          </p>
          <Link to="/" className="btn btn-info  text-white mt-4">
            Shop Now
          </Link>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;
