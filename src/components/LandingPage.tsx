import { Link } from 'react-router-dom';
import { Home, Wallet, ScrollText, Home as HomeLoan, Heart, Scissors } from 'lucide-react';

const demos = [
  {
    path: '/real-estate',
    icon: Home,
    title: 'Real Estate',
    description: 'Property listings with buy/rent filters, detailed property views, and responsive card layout.',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
  },
  {
    path: '/accounting',
    icon: Wallet,
    title: 'Accounting',
    description: 'Professional accounting services site with emerald green accents, services, about, and contact pages.',
    color: 'bg-emerald-600',
    hoverColor: 'hover:bg-emerald-700',
  },
  {
    path: '/conveyancing',
    icon: ScrollText,
    title: 'Conveyancing',
    description: 'Property law firm site with indigo/purple theme, services, team, and testimonials.',
    color: 'bg-indigo-600',
    hoverColor: 'hover:bg-indigo-700',
  },
  {
    path: '/mortgage-broker',
    icon: HomeLoan,
    title: 'Mortgage Broker',
    description: 'Mortgage services with calculators, testimonials, and a navy/teal color scheme.',
    color: 'bg-teal-700',
    hoverColor: 'hover:bg-teal-800',
  },
  {
    path: '/medical-centre',
    icon: Heart,
    title: 'Medical Centre',
    description: 'Healthcare site with team profiles, news, appointments booking, and medical green/blue palette.',
    color: 'bg-cyan-600',
    hoverColor: 'hover:bg-cyan-700',
  },
  {
    path: '/barbershop',
    icon: Scissors,
    title: 'Barbershop',
    description: 'Premium barbershop with dark masculine theme, services, team, gallery, booking form, and contact pages.',
    color: 'bg-amber-600',
    hoverColor: 'hover:bg-amber-700',
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Precision Web Solutions</h1>
          <p className="mt-2 text-lg text-gray-600">Professional Web Developer Portfolio</p>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Content */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Industry-Specific
            <span className="block text-blue-600">Demo Applications</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a collection of professional web applications built with modern React, TypeScript, and Tailwind CSS. Each demo showcases a different industry with custom theming, responsive design, and realistic features.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <div className="text-left bg-white p-6 rounded-lg shadow-md max-w-md">
              <h3 className="font-semibold text-gray-900">Tech Stack</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• React 19 + TypeScript</li>
                <li>• Vite for lightning-fast builds</li>
                <li>• Tailwind CSS v4</li>
                <li>• React Router v7</li>
                <li>• Lucide React icons</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Demo Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <div
                key={demo.path}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className={`${demo.color} p-6 flex items-center justify-center`}>
                  <demo.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{demo.title}</h3>
                  <p className="mt-3 text-gray-600">{demo.description}</p>
                  <Link
                    to={demo.path}
                    className={`mt-6 inline-block w-full text-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${demo.color} ${demo.hoverColor}`}
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Precision Web Solutions. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
