export interface Property {
  id: string;
  title: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  price: number;
  type: 'house' | 'apartment' | 'townhouse' | 'unit';
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  description: string;
  features: string[];
  imageUrl: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  listingType: 'buy' | 'rent';
  dateListed: string;
  priceFormatted?: string;
}

export interface SearchFilters {
  listingType: 'buy' | 'rent';
  suburb: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  propertyType?: string;
}
