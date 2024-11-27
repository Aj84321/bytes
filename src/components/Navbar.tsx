import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Festive Season', href: '#festive' },
    { label: 'Pantry Service', href: '#pantry' },
    { label: 'Blog', href: '#blog' },
    { label: 'Career', href: '#career' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-2xl">
            Gokhana
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-sm font-medium">
                Order Now
              </button>
            </div>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-2 text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;