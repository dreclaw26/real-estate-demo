import { useState } from 'react';
import { Image as ImageIcon, Filter } from 'lucide-react';
import { gallery, barbers } from '../data';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(gallery.map(item => item.category)))];

  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  const getBarberName = (barberId?: string) => {
    if (!barberId) return 'Unknown';
    const barber = barbers.find(b => b.id === barberId);
    return barber ? barber.name : 'Unknown';
  };

  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-charcoal-900 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Browse our portfolio of cuts, styles, and grooming work. See what we can do for you.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="h-5 w-5 text-barber-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-barber-500 text-white'
                    : 'bg-charcoal-800 text-gray-300 hover:bg-charcoal-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredGallery.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-barber-500 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-barber-400 text-sm">{item.category}</p>
                      {item.barberId && (
                        <p className="text-gray-400 text-xs mt-1">by {getBarberName(item.barberId)}</p>
                      )}
                    </div>
                  </div>

                  {/* Overlay icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-barber-500/80 rounded-full p-3">
                      <ImageIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No images found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Like What You See?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book an appointment to get a cut or style from our talented barbers. We'll work with you to achieve your perfect look.
          </p>
          <a
            href="/booking"
            className="inline-flex items-center bg-barber-500 hover:bg-barber-400 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
