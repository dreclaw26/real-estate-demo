import { Link } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">Clear Title Conveyancing</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-600 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}