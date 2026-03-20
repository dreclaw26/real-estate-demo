import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award, ArrowRight, Phone, Scissors, Sparkles, Timer } from 'lucide-react';
import { services, barbers, gallery } from '../data';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-navy-950 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Art of <span className="text-barber-400">Classic Grooming</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Where tradition meets modern style. Expert cuts, hot towel shaves, and premium grooming services for the distinguished gentleman.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/booking"
                className="bg-barber-500 hover:bg-barber-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-barber-400 text-white hover:bg-barber-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-charcoal-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-barber-400" />
              <span className="text-sm font-medium">Master Barbers</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-barber-400" />
              <span className="text-sm font-medium">Flexible Hours</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="h-5 w-5 text-barber-400" />
              <span className="text-sm font-medium">Premium Products</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-barber-400" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From classic cuts to modern styles, we offer a full range of grooming services tailored to your individual style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-6 hover:border-barber-500 transition-all group">
                <div className="bg-charcoal-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-barber-900 transition-colors">
                  <Scissors className="h-7 w-7 text-barber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center"><Timer className="h-4 w-4 mr-1" />{service.duration}</span>
                  <span className="text-barber-400 font-semibold">{service.price}</span>
                </div>
                <Link
                  to="/booking"
                  className="text-barber-400 hover:text-barber-300 font-medium flex items-center group/link"
                >
                  Book Now
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-barber-400 hover:text-barber-300 font-medium"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Barbers</h2>
            <p className="text-lg text-gray-400">
              Skilled craftsmen dedicated to the art of barbering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {barbers.slice(0, 4).map((barber) => (
              <div key={barber.id} className="bg-charcoal-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-charcoal-700 hover:border-barber-500">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{barber.name}</h3>
                  <p className="text-barber-400 mb-2">{barber.role}</p>
                  <p className="text-sm text-gray-400 mb-4">{barber.specialty}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-barber-400 mr-1" />
                    <span>{barber.rating} ({barber.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/team"
              className="inline-flex items-center text-barber-400 hover:text-barber-300 font-medium"
            >
              View All Barbers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Work</h2>
              <p className="text-lg text-gray-400">See the quality of our cuts and styles.</p>
            </div>
            <Link
              to="/gallery"
              className="hidden md:inline-flex items-center text-barber-400 hover:text-barber-300 font-medium"
            >
              View Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 8).map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/gallery"
              className="inline-flex items-center text-barber-400 hover:text-barber-300 font-medium"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose The Classic Cut?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Master Craftsmanship',
                description: 'Our barbers have years of experience and continuously train on the latest techniques while respecting traditional methods.',
                icon: Award
              },
              {
                title: 'Premium Experience',
                description: 'From the moment you walk in, expect exceptional service, comfortable seating, and top-quality grooming products.',
                icon: Sparkles
              },
              {
                title: 'Tailored to You',
                description: 'Every cut is customized to your face shape, hair type, and personal style. We listen to what you want and deliver.',
                icon: Users
              }
            ].map((item) => (
              <div key={item.title} className="bg-charcoal-800/50 backdrop-blur-sm rounded-xl p-8 text-center border border-charcoal-700">
                <div className="bg-charcoal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-barber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Fresh Look?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book your appointment today and experience the classic difference. Walk-ins welcome, but appointments ensure your preferred time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center bg-barber-500 hover:bg-barber-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:0298765432"
              className="inline-flex items-center border-2 border-barber-400 text-barber-400 hover:bg-barber-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (02) 9876 5432
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
