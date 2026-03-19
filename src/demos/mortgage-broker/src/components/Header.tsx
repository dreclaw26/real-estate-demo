import { Link } from 'react-router-dom';
import { Home, Calculator, Users, MessageSquare, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: 'Services', icon: Users },
    { to: '/calculators', label: 'Calculators', icon: Calculator },
    { to: '/testimonials', label: 'Testimonials', icon: Users },
    { to: '/contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <header className="bg-navy-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-teal-400" />
            <span className="text-2xl font-bold text-white">HomeLoan Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center space-x-1 text-gray-300 hover:text-teal-400 transition-colors"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:bg-navy-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
