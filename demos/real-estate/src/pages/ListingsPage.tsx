import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import SearchFilter from '../components/SearchFilter';
import { properties } from '../data/properties';
import type { Property, SearchFilters } from '../types/property';

interface ListingsPageProps {
  listingType: 'buy' | 'rent';
}

const ListingsPage = ({ listingType }: ListingsPageProps) => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    suburb: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    listingType,
  });

  useEffect(() => {
    filterProperties();
  }, [filters]);

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setFilters((prev: SearchFilters) => ({ ...prev, propertyType: typeParam }));
    }
  }, [searchParams]);

  const filterProperties = () => {
    let result = properties.filter((p) => p.listingType === listingType);

    if (filters.suburb) {
      const searchTerm = filters.suburb.toLowerCase();
      result = result.filter(
        (p) =>
          p.suburb.toLowerCase().includes(searchTerm) ||
          p.postcode.includes(searchTerm) ||
          p.address.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.minPrice) {
      const min = Number(filters.minPrice);
      if (!isNaN(min)) {
        result = result.filter((p) => p.price >= min);
      }
    }

    if (filters.maxPrice) {
      const max = Number(filters.maxPrice);
      if (!isNaN(max)) {
        result = result.filter((p) => p.price <= max);
      }
    }

    if (filters.bedrooms) {
      if (filters.bedrooms === '5+') {
        result = result.filter((p) => p.bedrooms >= 5);
      } else {
        const beds = parseInt(filters.bedrooms);
        if (!isNaN(beds)) {
          result = result.filter((p) => p.bedrooms === beds);
        }
      }
    }

    if (filters.propertyType) {
      result = result.filter((p) => p.type === filters.propertyType);
    }

    setFilteredProperties(result);
  };

  const handleFilterChange = (newFilters: Partial<SearchFilters>) => {
    setFilters((prev: SearchFilters) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">
            {listingType === 'buy' ? 'Properties for Sale' : 'Properties for Rent'}
          </h1>
          <p className="text-blue-100 text-lg">
            {listingType === 'buy'
              ? 'Find your perfect place to buy across Australia'
              : 'Discover rental properties in your preferred location'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={filterProperties}
        />

        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredProperties.length}</span> properties
          </p>
          <select
            onChange={(e) => {
              const value = e.target.value;
              const sorted = [...filteredProperties];
              if (value === 'price-low') {
                sorted.sort((a, b) => a.price - b.price);
              } else if (value === 'price-high') {
                sorted.sort((a, b) => b.price - a.price);
              } else if (value === 'newest') {
                sorted.sort(
                  (a, b) => new Date(b.dateListed).getTime() - new Date(a.dateListed).getTime()
                );
              }
              setFilteredProperties(sorted);
            }}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600">
              Try adjusting your search filters to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;
