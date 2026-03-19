import { Link } from 'react-router-dom';
import { Search, Home, Building2, Key, Shield, Clock, Star } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const HomePage = () => {
  const featuredProperties = properties.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80')`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Dream Home Across Australia
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Discover thousands of properties for sale and rent. From beachfront apartments
              to suburban family homes, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 px-4 -mt-16 relative z-10 shadow-lg rounded-t-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Suburb, city or postcode"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All property types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
                <option value="unit">Unit</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Any price</option>
                <option value="300000">$300,000+</option>
                <option value="500000">$500,000+</option>
                <option value="750000">$750,000+</option>
                <option value="1000000">$1,000,000+</option>
              </select>
              <Link
                to="/buy"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AussieEstate?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make finding your perfect property simple, safe, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Search
              </h3>
              <p className="text-gray-600">
                Find exactly what you're looking for with powerful filters and an
                intuitive interface.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trusted Listings
              </h3>
              <p className="text-gray-600">
                All properties are verified and updated regularly. What you see is
                what you get.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Alerts
              </h3>
              <p className="text-gray-600">
                Get notified immediately when a new property matching your criteria
                hits the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Property Type
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              to="/buy?type=house"
              className="group relative bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <Home className="h-16 w-16 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">Houses</h3>
                <p className="text-sm text-gray-600">Suburban living</p>
              </div>
            </Link>

            <Link
              to="/buy?type=apartment"
              className="group relative bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">Apartments</h3>
                <p className="text-sm text-gray-600">Modern high-rise</p>
              </div>
            </Link>

            <Link
              to="/rent?type=townhouse"
              className="group relative bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <Home className="h-16 w-16 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">Townhouses</h3>
                <p className="text-sm text-gray-600">Low-maintenance</p>
              </div>
            </Link>

            <Link
              to="/rent?type=unit"
              className="group relative bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <Key className="h-16 w-16 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">Units</h3>
                <p className="text-sm text-gray-600">Affordable options</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <Link
              to="/buy"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View all
              <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Found my dream home through AussieEstate. The search was easy and
                the agent was incredibly helpful."
              </p>
              <p className="font-semibold text-gray-900">- Emma Wilson</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excellent platform for renters. I found a great apartment within a
                week of signing up."
              </p>
              <p className="font-semibold text-gray-900">- James Chen</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The filtering options are great. I could narrow down exactly what
                I wanted and found the perfect match."
              </p>
              <p className="font-semibold text-gray-900">- Michael Brown</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
