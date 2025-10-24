// src/components/Support.jsx
import React from "react";

export default function Support() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Support</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-6">
        Need help? Our support team is here to assist you with any questions
        or issues you may have. Reach out anytime and we'll get back to you promptly.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Contact Support</h2>
        <p className="mb-4">Email: support@example.com</p>
        <p className="mb-4">Phone: +1 234 567 890</p>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded-md w-full h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
