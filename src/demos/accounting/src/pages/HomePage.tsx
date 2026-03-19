import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, BookOpen, FileText, ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Preparation',
      description: 'Expert tax preparation for individuals and businesses, ensuring maximum deductions and compliance.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning to help you build wealth and secure your future.'
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping',
      description: 'Accurate and timely bookkeeping services to keep your finances organized and audit-ready.'
    },
    {
      icon: FileText,
      title: 'CFO Services',
      description: 'Strategic financial leadership and reporting for growing businesses.'
    }
  ];

  const whyChooseUs = [
    'Experienced CPAs and tax professionals',
    'Personalized service tailored to your needs',
    'Cutting-edge technology for efficient processing',
    'Year-round support and consulting'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Accounting Solutions for Your Financial Success
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                From tax preparation to strategic financial planning, we help individuals and businesses achieve their financial goals with precision and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-800 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-800 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Calculator className="h-64 w-64 text-emerald-300 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive accounting solutions designed to meet your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Precision Accounting?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="bg-emerald-100 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                alt="Accounting team"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation today and discover how we can help you achieve your financial goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-800 font-bold rounded-lg hover:bg-emerald-50 transition-colors text-lg"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}