import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const ContactItem = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">We'd Love to Hear From You</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about our products, need design advice, or want to collaborate, our team is ready to help.
          </p>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-5">
            <FiMapPin className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
          <p className="text-gray-600 mb-2">123 Design District Ave</p>
          <p className="text-gray-600">New York, NY 10001</p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-black font-medium hover:underline"
          >
            Get Directions →
          </a>
        </div>

        {/* Contact Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-5">
            <FiPhone className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Call Us</h3>
          <p className="text-gray-600 mb-2">Mon-Fri: 9am-6pm EST</p>
          <p className="text-2xl font-medium">+1 (555) 123-4567</p>
          <a 
            href="tel:+15551234567" 
            className="inline-block mt-4 text-black font-medium hover:underline"
          >
            Call Now →
          </a>
        </div>

        {/* Contact Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-5">
            <FiMail className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Email Us</h3>
          <p className="text-gray-600 mb-2">General inquiries:</p>
          <p className="text-lg font-medium">hello@aike.com</p>
          <p className="text-gray-600 mt-3 mb-2">Customer support:</p>
          <p className="text-lg font-medium">support@aike.com</p>
        </div>
      </div>

      {/* Contact Form + Hours Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
            >
              <FiSend className="mr-2 text-white" />
              Send Message
            </button>
          </form>
        </div>

        {/* Business Hours + Social */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <FiClock className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Business Hours</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-16">
        <h2 className="text-2xl font-bold mb-6">Our Location</h2>
        <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
          <iframe 
            title="AIKE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256024698!2d-73.9881176845938!3d40.74844017932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
