import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">
                AIEA Foundation
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About Us
              </Link>
              <Link to="/artists" className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Artists
              </Link>
              <Link to="/publications" className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Publications
              </Link>
              <Link to="/news" className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                News
              </Link>
              <Link to="/donations" className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Donations
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Home
          </Link>
          <Link to="/about" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            About Us
          </Link>
          <Link to="/artists" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Artists
          </Link>
          <Link to="/publications" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Publications
          </Link>
          <Link to="/news" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            News
          </Link>
          <Link to="/donations" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Donations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 