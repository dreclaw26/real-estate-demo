import { Link } from 'react-router-dom';
import type { Property } from '../types/property';
import { Bath, Bed, Car, Square } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link
      to={`/property/${property.id}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.listingType === 'buy' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {property.type}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <span className="truncate">{property.address}, {property.suburb}</span>
        </p>

        <p className="text-2xl font-bold text-blue-600 mb-4">
          {property.listingType === 'buy'
            ? `$${property.price.toLocaleString('en-AU')}`
            : property.priceFormatted || `$${property.price}/week`}
        </p>

        <div className="flex items-center justify-between text-gray-600 text-sm border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Car className="h-4 w-4" />
            <span>{property.parking}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="h-4 w-4" />
            <span>{property.area}m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
