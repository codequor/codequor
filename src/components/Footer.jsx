// Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here (e.g., API call)
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-[#1065c0] to-[#0e55a0] text-[#fFF] py-12">
      <div className="max-w-7xl text-white mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About CodeQuor */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">CodeQuor</h3>
            <p className="text-gray-200 text-sm">
              Empowering businesses with cutting-edge technology solutions. Your trusted partner for innovative consultancy services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b5998] transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Email: <a href="mailto:codequor@gmail.com" className="hover:text-white transition duration-300">Support@codequor.com</a></li>
              <li>Phone: <a href="tel:+2348166489562" className="hover:text-white transition duration-300">+234-8166489562 </a></li>
              <li> <a href="tel:+2348148413982" className="hover:text-white transition duration-300"> +234-8148413982 </a></li>
              {/* <li>Address: 123 Tech Street, Innovation City, USA</li> */}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-200 text-sm mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#fFF] px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200/30 flex flex-col md:flex-row justify-between items-center text-white">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} CodeQuor. All rights reserved.
          </p>
          <Link
            to="/consult"
            className="mt-4 md:mt-0 bg-white text-[#fFF] px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300 font-semibold"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;