import { Link } from 'react-router-dom';
import { Scale, Home, FileText, CheckSquare, ArrowRight, Star, Users } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Conveyancing',
      description: 'Complete support for buying, selling, or transferring residential properties. We handle all legalities to ensure a smooth transaction.'
    },
    {
      icon: Scale,
      title: 'Commercial Conveyancing',
      description: 'Expert legal services for commercial property transactions, including retail, office, and industrial spaces.'
    },
    {
      icon: FileText,
      title: 'Contract Reviews',
      description: 'Thorough review and advice on contracts of sale, ensuring you understand your rights and obligations.'
    },
    {
      icon: CheckSquare,
      title: 'Settlements',
      description: 'Efficient and stress-free settlement services, coordinating all parties to ensure timely completion.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '2000+', label: 'Properties Settled' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'Sarah & James Wilson',
      text: 'Clear Title made our first home purchase so easy. They explained everything clearly and handled all the paperwork. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: 'Professional, responsive, and extremely knowledgeable. They helped us navigate a complex commercial transaction with ease.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Conveyancing Services for Smooth Property Transactions
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                From contract to settlement, we provide professional legal guidance to ensure your property transaction is stress-free and successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Scale className="h-64 w-64 text-primary-300 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive conveyancing solutions tailored to your property needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Clear Title?</h2>
              <div className="space-y-4">
                {[
                  'Local experts with deep knowledge of NSW property law',
                  'Transparent fixed-fee pricing, no hidden costs',
                  'Dedicated conveyancer assigned to your case',
                  'Cutting-edge online portal for real-time updates',
                  '24/7 access to your transaction documents'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckSquare className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                alt="Conveyancing team"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real clients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Read More Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Property Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let our experienced conveyancers guide you through every step. Contact us today for a free, no-obligation quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-bold rounded-lg hover:bg-primary-50 transition-colors text-lg"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}