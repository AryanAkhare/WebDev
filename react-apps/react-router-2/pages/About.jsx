import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-16">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">
          About Our Platform
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Empowering learners and instructors to achieve mastery through cutting-edge education and collaborative tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {/* Mission Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              We believe in democratizing education. Our mission is to provide high-quality, accessible, and engaging learning experiences for everyone, everywhere. We strive to connect passionate instructors with eager students, fostering a community of continuous growth and innovation.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
              <li>**Excellence:** Commitment to the highest quality in content and delivery.</li>
              <li>**Innovation:** Constantly evolving to integrate new technologies and teaching methods.</li>
              <li>**Community:** Building a supportive and interactive environment for all users.</li>
              <li>**Accessibility:** Making education available to diverse audiences globally.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
