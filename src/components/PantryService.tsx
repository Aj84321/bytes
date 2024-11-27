import React from 'react';
import { Coffee, ShoppingBag, Repeat } from 'lucide-react';

const PantryService = () => {
  return (
    <div className="bg-white py-24" id="pantry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pantry Service
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Keep your office pantry stocked with premium snacks and beverages
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Coffee className="h-12 w-12 text-blue-600" />
              <h3 className="mt-6 text-xl font-bold">Premium Beverages</h3>
              <p className="mt-4 text-gray-600">
                High-quality coffee, tea, and other refreshments for your team
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <ShoppingBag className="h-12 w-12 text-blue-600" />
              <h3 className="mt-6 text-xl font-bold">Healthy Snacks</h3>
              <p className="mt-4 text-gray-600">
                Nutritious and delicious snacks to keep your team energized
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Repeat className="h-12 w-12 text-blue-600" />
              <h3 className="mt-6 text-xl font-bold">Regular Restocking</h3>
              <p className="mt-4 text-gray-600">
                Automated inventory management and timely replenishment
              </p>
            </div>
          </div>

          <div className="mt-16 bg-blue-600 rounded-2xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to transform</span>
                  <span className="block">your office pantry?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-200">
                  Get started with our customizable pantry service plans
                </p>
                <a
                  href="#contact"
                  className="mt-8 bg-white border border-transparent rounded-full px-8 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantryService;