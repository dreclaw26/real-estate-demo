import { Home, FileText, CheckSquare, Building, Search, ClipboardList, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Conveyancing',
      description: 'We handle all aspects of residential property transactions, ensuring a smooth process from contract to settlement.',
      details: [
        'First home buyer assistance',
        'Property purchases and sales',
        'Refinancing',
        'Decoding of contracts',
        'Liaison with banks and agents',
        'Settlement coordination'
      ]
    },
    {
      icon: Building,
      title: 'Commercial Conveyancing',
      description: 'Expert legal support for commercial real estate transactions, from retail spaces to industrial warehouses.',
      details: [
        'Commercial property sales and purchases',
        'Lease negotiations and reviews',
        'Due diligence investigations',
        'Development site acquisitions',
        'Industrial property transactions',
        'Retail lease agreements'
      ]
    },
    {
      icon: FileText,
      title: 'Contract Reviews',
      description: 'Get peace of mind with our thorough contract review service. We identify risks and explain your obligations clearly.',
      details: [
        'Review of contracts for sale',
        'Vendor disclosure statement analysis',
        'Special conditions advice',
        'Contract amendments',
        'Negotiation support',
        'Risk assessment reports'
      ]
    },
    {
      icon: CheckSquare,
      title: 'Settlements',
      description: 'Our experienced team ensures your settlement proceeds smoothly, coordinating all parties and documentation.',
      details: [
        'On-time settlement guarantee',
        'Electronic settlement processing',
        'Title transfer registration',
        'Funds distribution',
        'Post-settlement follow-up',
        'Document archiving'
      ]
    },
    {
      icon: Search,
      title: 'Title Searches & Due Diligence',
      description: 'Comprehensive property searches to uncover any issues before you commit to a purchase.',
      details: [
        'Title searches and certificates',
        'Planning and zoning checks',
        'Easement and covenant identification',
        'Council rate inquiries',
        'Environmental assessments',
        'Strata report reviews'
      ]
    },
    {
      icon: ClipboardList,
      title: 'Off-the-Plan Purchases',
      description: 'Specialized services for buying property before construction, protecting your investment throughout the build.',
      details: [
        'Contract review for off-the-plan',
        'Sunset clause advice',
        'Progress payment certifications',
        'Defect assessment at completion',
        'Strata plan reviews',
        'Guardian rights protection'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Discuss your needs and receive a transparent fixed-fee quote.'
    },
    {
      step: '2',
      title: 'Contract Review',
      description: 'We review all documents and explain the terms clearly.'
    },
    {
      step: '3',
      title: 'Negotiation',
      description: 'If needed, we negotiate special conditions to protect your interests.'
    },
    {
      step: '4',
      title: 'Settlement',
      description: 'We coordinate all parties and ensure a smooth settlement day.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive conveyancing solutions for all your property needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={`https://images.unsplash.com/photo${
                      index === 0 ? '-1600596542819-36246f102842' :
                      index === 1 ? '-1486406146926-200b1a8220e8' :
                      index === 2 ? '-1450101499163-764bdd7362f9' :
                      index === 3 ? '-1590726123122-84814bd8236c' :
                      index === 4 ? '-1560518883-45f4b2022208' :
                      '1512917774080-ae1f38dfd101'
                    }?w=600&h=400&fit=crop`}
                    alt={service.title}
                    className="w-full h-auto rounded-xl shadow-lg"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent steps to successful settlement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto md:mx-0">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">{item.title}</h3>
                <p className="text-gray-600 text-center md:text-left">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-1/2 h-0.5 bg-primary-300" style={{ transform: 'translateX(100%)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Conveyancing Advice?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-bold rounded-lg hover:bg-primary-50 transition-colors text-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
            <Link
              to="/testimonials"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-800 transition-colors text-lg"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}