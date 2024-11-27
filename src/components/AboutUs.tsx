import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Gokhana
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Delivering excellence in corporate catering with a passion for quality and service
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Expert Team</h3>
              <p className="mt-2 text-gray-500">
                Our experienced chefs and staff are dedicated to providing exceptional service
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Quality First</h3>
              <p className="mt-2 text-gray-500">
                We use only the finest ingredients to ensure the best dining experience
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Timely Service</h3>
              <p className="mt-2 text-gray-500">
                Punctual delivery and professional service you can rely on
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Our kitchen"
                />
              </div>
              <div className="mt-10 lg:mt-0">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Our Story
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Founded with a vision to revolutionize corporate catering, Gokhana has been serving
                  businesses with exceptional food and service for over a decade. Our commitment to
                  quality and innovation has made us a trusted partner for companies across the region.
                </p>
                <div className="mt-10">
                  <a href="#contact" className="text-blue-600 hover:text-blue-500">
                    Learn more about our journey →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;