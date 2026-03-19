import { Link } from 'react-router-dom';
import { Home, Calculator, Star, ArrowRight } from 'lucide-react';
import { services, testimonials } from '../data';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Dream Home <span className="text-teal-400">Starts Here</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Expert mortgage advice tailored to your needs. Whether you're a first home buyer, refinancing, or building an investment portfolio, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive mortgage solutions designed to meet your unique financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="bg-navy-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  {service.id === 'home-loans' && <Home className="h-7 w-7 text-navy-700 group-hover:text-teal-600" />}
                  {service.id === 'refinancing' && <span className="text-2xl">🔄</span>}
                  {service.id === 'first-home-buyer' && <span className="text-2xl">🔑</span>}
                  {service.id === 'property-investment' && <span className="text-2xl">📈</span>}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-navy-700 hover:text-teal-600 font-medium flex items-center group/link"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Plan Your finances</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our free online calculators to estimate borrowing power, repayments, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Borrowing Power', icon: '💰', color: 'bg-navy-600' },
              { name: 'Loan Repayment', icon: '📊', color: 'bg-teal-600' },
              { name: 'Stamp Duty', icon: '📝', color: 'bg-navy-700' },
              { name: 'Comparison Rate', icon: '⚖️', color: 'bg-teal-700' },
            ].map((calc) => (
              <Link
                key={calc.name}
                to="/calculators"
                className={`${calc.color} text-white p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className="text-4xl mb-3">{calc.icon}</div>
                <h3 className="font-semibold text-lg">{calc.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/calculators"
              className="inline-flex items-center bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Access All Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center items-center space-x-2 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Rated 4.9/5 based on 200+ customer reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-navy-700 hover:text-teal-600 font-medium"
            >
              Read More Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Home Loan Journey?</h2>
          <p className="text-xl text-gray-200 mb-10">
            Book a free consultation with one of our expert brokers today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Get Your Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose HomeLoan Pro?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Advice',
                description: 'Our brokers have 15+ years average experience and deep knowledge of the lending market.',
                icon: '🎓'
              },
              {
                title: '100+ lenders',
                description: 'We compare loans from over 100 lenders to find the best rate and terms for you.',
                icon: '🏦'
              },
              {
                title: 'No Cost to You',
                description: 'Our service is completely free. We get paid by the lender, not you.',
                icon: '✓'
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
