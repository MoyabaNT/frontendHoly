import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4A2C2A] text-gray-200 py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-sm font-light">© 2025 Arranged Holy. All rights reserved.</p>
        <nav className="flex justify-center space-x-6">
          <a href="/about" className="hover:text-[#D4A017] transition-colors duration-200">About</a>
          <a href="/contact" className="hover:text-[#D4A017] transition-colors duration-200">Contact</a>
          <a href="/privacy" className="hover:text-[#D4A017] transition-colors duration-200">Privacy</a>
        </nav>
        <p className="mt-4 text-xs font-light">Inspired by faith and devotion.</p>

        {/* Subscription Section */}
        <div className="mt-8">
          <p className="text-sm font-serif text-white mb-2">Join Our Sacred Community</p>
          <button className="bg-[#D4A017] text-[#4A2C2A] font-serif py-2 px-6 rounded-full hover:bg-[#B8860B] transition-all duration-300 shadow-lg hover:shadow-xl">
            Subscribe Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;