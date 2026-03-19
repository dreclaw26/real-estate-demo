import { Link } from 'react-router-dom';
import { Stethoscope, UserCheck, Heart, ClipboardCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../data';

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="h-10 w-10" />;
      case 'UserCheck': return <UserCheck className="h-10 w-10" />;
      case 'Heart': return <Heart className="h-10 w-10" />;
      case 'ClipboardCheck': return <ClipboardCheck className="h-10 w-10" />;
      default: return <Stethoscope className="h-10 w-10" />;
    }
  };

  const features = [
    'Experienced practitioners',
    'Modern equipment and technology',
    'Bulk billing available for eligible patients',
    'Short waiting times',
    'Comprehensive follow-up care',
    'Multilingual staff available',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive healthcare solutions for every stage of life.
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
                  <div className="bg-gradient-to-br from-blue-100 to-medical-100 p-2 rounded-2xl inline-block mb-4">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-blue-700">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-medical-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/appointments"
                    className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Book This Service
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

      {/* What to Expect */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We strive to make every visit comfortable and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Check-in', desc: 'Friendly reception staff will greet you and assist with paperwork.' },
              { step: '2', title: 'Consultation', desc: 'Meet with your healthcare provider for a thorough examination and discussion.' },
              { step: '3', title: 'Treatment Plan', desc: 'Receive a personalized care plan with clear next steps.' },
              { step: '4', title: 'Follow-up', desc: 'We\'ll check in to ensure your recovery and provide ongoing support.' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Health Insurance & Bulk Billing</h2>
            <p className="text-gray-600 mb-6">
              We accept most major health insurance providers. For Medicare cardholders, we offer bulk billing on many services. Our staff can help you understand your coverage and out-of-pocket costs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Medicare', 'Bupa', 'Medibank', 'HCF', 'AHM', 'Frank Health'].map(( insurer) => (
                <span key={insurer} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
                  {insurer}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
