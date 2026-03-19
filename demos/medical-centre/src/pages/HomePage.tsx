import { Link } from 'react-router-dom';
import { Heart, Clock, Shield, Users, Star, ArrowRight, Phone } from 'lucide-react';
import { services, doctors, news } from '../data';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-medical-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Health, <span className="text-medical-400">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Comprehensive healthcare for the whole family. Experienced doctors, modern facilities, and compassionate care under one roof.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/appointments"
                className="bg-medical-500 hover:bg-medical-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-medical-400" />
              <span className="text-sm font-medium">Extended Hours</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-medical-400" />
              <span className="text-sm font-medium">Experienced Doctors</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-medical-400" />
              <span className="text-sm font-medium">Bulk Billing Available</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-medical-400" />
              <span className="text-sm font-medium">4.8/5 Patient Rating</span>
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
              Comprehensive healthcare services for the whole family, from routine check-ups to specialized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-medical-100 transition-colors">
                  {service.id === 'general-practice' && <span className="text-2xl">🩺</span>}
                  {service.id === 'specialists' && <span className="text-2xl">👨‍⚕️</span>}
                  {service.id === 'allied-health' && <span className="text-2xl">❤️</span>}
                  {service.id === 'health-checks' && <span className="text-2xl">📋</span>}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-blue-700 hover:text-medical-600 font-medium flex items-center group/link"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Medical Team</h2>
            <p className="text-lg text-gray-600">
              Experienced, caring professionals dedicated to your wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.slice(0, 4).map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-700 mb-2">{doctor.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{doctor.specialty}</p>
                  <Link
                    to="/team"
                    className="text-blue-700 hover:text-medical-600 text-sm font-medium"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/team"
              className="inline-flex items-center text-blue-700 hover:text-medical-600 font-medium"
            >
              View All Doctors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest News</h2>
              <p className="text-lg text-gray-600">Stay informed about health tips and clinic updates.</p>
            </div>
            <Link
              to="/news"
              className="hidden md:inline-flex items-center text-blue-700 hover:text-medical-600 font-medium"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article) => (
              <article key={article.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {new Date(article.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <Link
                    to={`/news/${article.id}`}
                    className="text-blue-700 hover:text-medical-600 font-medium inline-flex items-center"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/news"
              className="inline-flex items-center text-blue-700 hover:text-medical-600 font-medium"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-medical-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HealthFirst?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Comprehensive Care',
                description: 'From general practice to specialized treatments, we offer a full spectrum of medical services under one roof.',
                icon: Shield
              },
              {
                title: 'Modern Facilities',
                description: 'State-of-the-art equipment and comfortable, clean facilities to ensure the best possible care experience.',
                icon: Heart
              },
              {
                title: 'Patient-Centered',
                description: 'We listen to your concerns, involve you in decisions, and tailor treatments to your individual needs.',
                icon: Users
              }
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Call us or book online. We accepting new patients and referrals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/appointments"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+61212345678"
              className="inline-flex items-center border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (02) 1234 5678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
