import { Link } from 'react-router-dom';
import { Home, RefreshCw, Key, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../data';

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="h-10 w-10" />;
      case 'RefreshCw': return <RefreshCw className="h-10 w-10" />;
      case 'Key': return <Key className="h-10 w-10" />;
      case 'TrendingUp': return <TrendingUp className="h-10 w-10" />;
      default: return <Home className="h-10 w-10" />;
    }
  };

  const features = [
    'Free initial consultation',
    'Access to 100+ lenders',
    'Personalized loan recommendations',
    'End-to-end support',
    'No obligation advice',
    'Fast pre-approval',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive mortgage solutions tailored to your unique situation and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0 lg:px-8">
                  <div className="bg-gradient-to-br from-navy-100 to-teal-100 p-2 rounded-2xl inline-block mb-4">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-navy-700">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and designed around you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Tell us about your goals and current situation' },
              { step: '2', title: 'Analysis', desc: 'We analyze your needs and find suitable options' },
              { step: '3', title: 'Comparison', desc: 'Present loan options with clear comparisons' },
              { step: '4', title: 'Support', desc: 'Guide you through application to settlement' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
