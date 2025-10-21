// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6 text-center">
        We'd love to hear from you! Fill out the form below.
      </p>

      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
