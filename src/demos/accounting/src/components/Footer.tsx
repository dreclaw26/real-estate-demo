import { Link } from 'react-router-dom';
import { Calculator, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Precision Accounting</span>
            </div>
            <p className="text-gray-300">
              Professional tax services, financial planning, and bookkeeping for individuals and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>info@precisionaccounting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>123 Financial District, NY 10001</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Precision Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}