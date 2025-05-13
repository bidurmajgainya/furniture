import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-6 md:px-10 w-full">
      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mt-16 text-sm">
        {/* Column 1 - About */}
        <div>
          <h2 className="text-white font-semibold mb-2">AIKE FURNITURE</h2>
          <p className="text-gray-400">
            We import and deliver premium handcrafted furniture pieces from around the world to your home.
          </p>
          <a href="#" className="text-[#c2ab92] inline-block mt-2">
            learn more →
          </a>
        </div>

        {/* Column 2 - Explore */}
        <div>
          <h3 className="font-semibold mb-2">Collections</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Outdoor</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Our Story</li>
            <li>Design Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 4 - Services */}
        <div>
          <h3 className="font-semibold mb-2">Customer Care</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>Care Instructions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 5 - Social Icons */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-xl text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-[#c2ab92]">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#c2ab92]">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-[#c2ab92]">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#c2ab92]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
        <div className="mt-6 flex flex-wrap justify-between items-center text-xs">
          <p>© 2024 AIKE Furniture. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Compliances</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
