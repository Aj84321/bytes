import React from 'react';
import { Briefcase } from 'lucide-react';

const Career = () => {
  const positions = [
    {
      title: 'Senior Chef',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We're looking for an experienced chef to join our growing team.'
    },
    {
      title: 'Catering Operations Manager',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead and optimize our catering operations across the city.'
    },
    {
      title: 'Customer Success Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our clients achieve success with our catering services.'
    }
  ];

  return (
    <div className="bg-white py-24" id="career">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Build your career with the leader in corporate catering
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900">Why Join Us?</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="ml-3 text-gray-700">Competitive compensation and benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="ml-3 text-gray-700">Professional growth opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="ml-3 text-gray-700">Innovative and dynamic work environment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900">Open Positions</h3>
              <div className="mt-6 space-y-6">
                {positions.map((position, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold text-gray-900">{position.title}</h4>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span>{position.location}</span>
                      <span className="mx-2">·</span>
                      <span>{position.type}</span>
                    </div>
                    <p className="mt-3 text-gray-600">{position.description}</p>
                    <button className="mt-4 text-blue-600 hover:text-blue-500">
                      Learn more →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;