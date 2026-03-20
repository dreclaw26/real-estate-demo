import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { barbers } from '../data';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-charcoal-900 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Barbers</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the skilled craftsmen behind The Classic Cut. Each barber brings unique expertise and passion to every cut.
          </p>
        </div>
      </section>

      {/* Barbers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className="bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden hover:border-barber-500 transition-all group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-1">{barber.name}</h3>
                    <p className="text-barber-400">{barber.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">{barber.specialty}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1 text-barber-400" />
                    <span>{barber.experience}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-barber-400 mr-1" />
                      <span className="text-white font-semibold">{barber.rating}</span>
                      <span className="text-gray-500 ml-1">({barber.reviews} reviews)</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">{barber.bio}</p>

                  <Link
                    to="/booking"
                    className="block w-full text-center bg-barber-500 hover:bg-barber-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book with {barber.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Years Combined Experience' },
              { value: '5000+', label: 'Happy Clients' },
              { value: '4.9', label: 'Average Rating' },
              { value: '15+', label: 'Services Offered' }
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="text-4xl font-bold text-barber-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
