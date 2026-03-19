import { Calculator, TrendingUp, BookOpen, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Preparation & Planning',
      description: 'We provide comprehensive tax services for individuals and businesses. Our experts ensure you take advantage of all deductions and credits while maintaining full compliance with tax regulations.',
      features: [
        'Individual & business tax returns',
        'Tax planning and strategy',
        'IRS representation',
        'Amended returns',
        'Multi-state tax issues'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Build a secure financial future with our personalized planning services. We help you create strategies for wealth accumulation, retirement planning, and investment management.',
      features: [
        'Retirement planning',
        'Investment strategy',
        'Estate planning',
        'Education funding',
        'Risk management'
      ]
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping',
      description: 'Keep your financial records accurate and up-to-date with our professional bookkeeping services. We handle the day-to-day recording so you can focus on running your business.',
      features: [
        'Monthly bookkeeping',
        'Bank reconciliation',
        'Financial reporting',
        'Payroll processing',
        'Accounts payable/receivable'
      ]
    },
    {
      icon: FileText,
      title: 'CFO & Business Advisory',
      description: 'Get strategic financial leadership without the full-time cost. Our CFO services provide the insight and guidance needed to drive business growth and profitability.',
      features: [
        'Financial analysis & reporting',
        'Cash flow management',
        'Budgeting and forecasting',
        'KPI monitoring',
        'Strategic planning'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Comprehensive accounting and financial solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={`https://images.unsplash.com/photo${
                      index === 0 ? '-1554224155-6726b3ff858f' :
                      index === 1 ? '-1558494949-48497964e594' :
                      index === 2 ? '-1554224154-6726b3ff858f' :
                      '1551288049-beb1acd3a3d4'
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you identify the best solutions for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors text-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}