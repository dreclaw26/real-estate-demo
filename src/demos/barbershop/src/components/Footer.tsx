import { Link } from 'react-router-dom';
import { Scissors, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-barber-400" />
              <span className="text-2xl font-bold">The Classic Cut</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Sydney's premier gentlemen's barbershop. Experienced barbers, traditional craftsmanship, and modern styles. Walk-ins welcome, appointments preferred.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-barber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-barber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-barber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-barber-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-barber-400 transition-colors">
                  Our Barbers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-barber-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-barber-400 transition-colors">
                  Book Online
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-barber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4 text-barber-400" />
                <span>(02) 9876 5432</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4 text-barber-400" />
                <span>bookings@theclassiccut.com.au</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 text-barber-400 mt-1" />
                <span>123 Main Street<br />Sydney NSW 2000</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <Clock className="h-4 w-4 text-barber-400 mt-1" />
                <span>Mon-Thu: 9am-8pm<br />Fri-Sat: 9am-6pm<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Classic Cut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
