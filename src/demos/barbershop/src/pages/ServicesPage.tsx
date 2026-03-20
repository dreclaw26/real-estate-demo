import { Link } from 'react-router-dom';
import { Clock, DollarSign, ArrowRight, Scissors, Sparkles, Timer } from 'lucide-react';
import { services } from '../data';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-charcoal-900 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium grooming experiences tailored to your needs. Every service includes consultation and styling advice.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden hover:border-barber-500 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center text-barber-400 font-bold text-lg">
                      <DollarSign className="h-5 w-5" />
                      <span>{service.price}</span>
                    </div>
                  </div>

                  <Link
                    to="/booking"
                    className="block w-full text-center bg-barber-500 hover:bg-barber-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Book This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What's Included</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: 'Precision Cutting',
                description: 'Every cut is tailored to your face shape, hair type, and lifestyle. We take the time to get it right.'
              },
              {
                icon: Sparkles,
                title: 'Premium Products',
                description: 'We use only the finest grooming products from established brands like American Crew, Layrite, and Murray\'s.'
              },
              {
                icon: Timer,
                title: 'Relaxing Experience',
                description: 'Enjoy a complimentary hot towel refresh, scalp massage, and personalized grooming advice with every service.'
              }
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="bg-charcoal-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-barber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-barber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Choose your service and secure your spot with one of our expert barbers.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center bg-barber-500 hover:bg-barber-400 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Book Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
