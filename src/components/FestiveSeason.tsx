import React from 'react';
import { Gift, Calendar, Utensils } from 'lucide-react';

const FestiveSeason = () => {
  return (
    <div className="bg-gray-50 py-24" id="festive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Festive Season Specials
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Celebrate special occasions with our curated festive menus
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Holiday feast"
            />
            <div className="p-6">
              <div className="flex items-center">
                <Gift className="h-6 w-6 text-blue-600" />
                <h3 className="ml-2 text-lg font-bold">Holiday Packages</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Special menus for corporate holiday celebrations and year-end events
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Themed events"
            />
            <div className="p-6">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h3 className="ml-2 text-lg font-bold">Themed Events</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Customized themed menus for special occasions and cultural celebrations
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Custom catering"
            />
            <div className="p-6">
              <div className="flex items-center">
                <Utensils className="h-6 w-6 text-blue-600" />
                <h3 className="ml-2 text-lg font-bold">Custom Catering</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Bespoke menus tailored to your specific event requirements
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700">
            View Festive Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default FestiveSeason;