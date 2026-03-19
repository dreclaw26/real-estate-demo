import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Car, Square, Phone, Mail, MapPin, Home } from 'lucide-react';
import { properties } from '../data/properties';
import { formatPrice } from '../data/properties';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to={`/${property.listingType}`}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to {property.listingType === 'buy' ? 'Buy' : 'Rent'} listings
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px]">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {property.listingType === 'buy' ? 'For Sale' : 'For Rent'}
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium capitalize">
                {property.type}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-start space-x-2 text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-lg">
                      {property.address}, {property.suburb} {property.state} {property.postcode}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 rounded-xl mb-8">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Bedrooms</p>
                    <p className="text-xl font-bold text-gray-900">{property.bedrooms}</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="text-xl font-bold text-gray-900">{property.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <Car className="h-6 w-6 mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Parking</p>
                    <p className="text-xl font-bold text-gray-900">{property.parking}</p>
                  </div>
                  <div className="text-center">
                    <Square className="h-6 w-6 mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Area</p>
                    <p className="text-xl font-bold text-gray-900">{property.area}m²</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <svg
                          className="h-5 w-5 text-green-600 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-1">
                      {property.listingType === 'buy' ? 'Price' : 'Weekly Rent'}
                    </p>
                    <p className="text-3xl font-bold text-blue-600">
                      {property.listingType === 'buy'
                        ? `$${property.price.toLocaleString('en-AU')}`
                        : property.priceFormatted || `$${property.price}/week`}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      {property.listingType === 'buy' ? 'Request Inspection' : 'Apply Now'}
                    </button>
                    <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">
                      Save Property
                    </button>
                    <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">
                      Share Property
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Contact Agent</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">
                          {property.agent.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{property.agent.name}</p>
                        <p className="text-sm text-gray-600">Licensed Real Estate Agent</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a
                        href={`tel:${property.agent.phone}`}
                        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{property.agent.phone}</span>
                      </a>
                      <a
                        href={`mailto:${property.agent.email}`}
                        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{property.agent.email}</span>
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Home className="h-4 w-4" />
                      <span>Listed on {new Date(property.dateListed).toLocaleDateString('en-AU')}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Property ID: {property.id.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
