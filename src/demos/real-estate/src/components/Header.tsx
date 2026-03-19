import { Link } from 'react-router-dom';
import { Home, Building2, Key, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">AussieEstate</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/buy"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Buy</span>
            </Link>
            <Link
              to="/rent"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Key className="h-4 w-4" />
              <span>Rent</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              List Property
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
