import { Search, MapPin } from 'lucide-react';

interface SearchFilters {
  suburb: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  listingType: 'buy' | 'rent';
  propertyType?: string;
}

interface SearchFilterProps {
  filters: SearchFilters;
  onFilterChange: (filters: Partial<SearchFilters>) => void;
  onSearch: () => void;
}

const SearchFilter = ({ filters, onFilterChange, onSearch }: SearchFilterProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="suburb"
            placeholder="Suburb or postcode"
            value={filters.suburb}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5+">5+ Bedrooms</option>
          </select>
        </div>

        <div>
          <input
            type="number"
            name="minPrice"
            placeholder="Min price"
            value={filters.minPrice}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max price"
            value={filters.maxPrice}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={onSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
