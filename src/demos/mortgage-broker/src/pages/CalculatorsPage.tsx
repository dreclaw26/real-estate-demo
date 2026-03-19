import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Info } from 'lucide-react';

export default function CalculatorsPage() {
  const calcDetails = [
    {
      id: 'borrowing-power',
      title: 'Borrowing Power Calculator',
      description: 'Estimate how much you can borrow based on your income, expenses, and other financial commitments. This gives you a realistic idea of your price range before house hunting.',
      fields: ['Annual income', 'Living expenses', 'Existing loans', 'Number of dependents'],
      result: 'Maximum borrowing amount'
    },
    {
      id: 'repayment',
      title: 'Loan Repayment Calculator',
      description: 'Calculate your monthly repayments for different loan amounts, interest rates, and loan terms. Helps you budget and decide on the right loan size.',
      fields: ['Loan amount', 'Interest rate', 'Loan term', 'Repayment frequency'],
      result: 'Monthly/weekly/fortnightly payment'
    },
    {
      id: 'stamp-duty',
      title: 'Stamp Duty Calculator',
      description: 'Estimate the stamp duty you\'ll need to pay when purchasing property in your state or territory. Includes transfer fees and other government charges.',
      fields: ['Property value', 'State/territory', 'First home buyer (yes/no)', 'Property type'],
      result: 'Total stamp duty and fees'
    },
    {
      id: 'comparison-rate',
      title: 'Comparison Rate Calculator',
      description: 'See the true cost of a loan including interest rate and annual fees. Comparison rates help you compare different products fairly across lenders.',
      fields: ['Loan amount', 'Interest rate', 'Annual fees', 'Loan term'],
      result: 'Comparison rate and total cost'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Calculator className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Calculators</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Free online tools to help you understand your borrowing capacity and plan your finances.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-teal-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start bg-white border-l-4 border-teal-500 p-4 rounded-r-lg">
            <Info className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">Important Note</p>
              <p>These calculators provide estimates only and should not be considered as financial advice. For accurate assessments, please consult with our mortgage brokers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {calcDetails.map((calc) => (
              <div key={calc.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <Calculator className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{calc.title}</h2>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{calc.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Inputs:</p>
                  <div className="flex flex-wrap gap-2">
                    {calc.fields.map((field) => (
                      <span
                        key={field}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Output:</p>
                  <p className="text-teal-700 font-medium">{calc.result}</p>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Calculate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Calculations?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our brokers can run detailed calculations tailored to your specific situation and explain what the numbers mean for your financial future.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-navy-700 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
