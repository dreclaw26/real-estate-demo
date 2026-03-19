import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AussieEstate</span>
            </div>
            <p className="text-sm max-w-md">
              Your trusted destination for finding the perfect property across Australia.
              Whether you're buying or renting, we make property search simple and enjoyable.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1300 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@aussieestate.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sydney, NSW, Australia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/buy" className="hover:text-white transition-colors">Buy</a>
              </li>
              <li>
                <a href="/rent" className="hover:text-white transition-colors">Rent</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">List Property</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AussieEstate. All rights reserved. Demo site built with React, Vite & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
