import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Assuming you have lucide-react installed

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-16">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Have questions, feedback, or need support? Reach out to us!
        </p>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-y"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Contact Info</h2>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-yellow-500" size={20} />
              <span>support@yourplatform.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="text-yellow-500" size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="text-yellow-500 mt-1" size={20} />
              <span>123 Learning Lane, Knowledge City, KC 98765</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
