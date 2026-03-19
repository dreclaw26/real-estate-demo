import { Link } from 'react-router-dom';
import { Heart, Calendar, Users, FileText, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: Heart },
    { to: '/services', label: 'Services', icon: Users },
    { to: '/team', label: 'Our Team', icon: Users },
    { to: '/news', label: 'News', icon: FileText },
    { to: '/appointments', label: 'Appointments', icon: Calendar },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-medical-400" />
            <span className="text-2xl font-bold text-white">HealthFirst Medical</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-300 hover:bg-blue-800 hover:text-white transition-colors"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/appointments"
              className="bg-medical-500 hover:bg-medical-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Book Appointment
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
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:bg-blue-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
              <Link
                to="/appointments"
                className="bg-medical-500 hover:bg-medical-600 text-white px-4 py-2 rounded-md font-medium transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
