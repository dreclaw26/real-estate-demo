import { Team, Target, Heart, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson, CPA',
      role: 'Managing Partner',
      bio: 'Over 20 years of experience in tax and financial planning. Former Big Four advisor.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Chen, CPA',
      role: 'Senior Tax Director',
      bio: 'Specializes in corporate taxation and international tax compliance.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Bookkeeping Manager',
      bio: 'Certified Bookkeeper with expertise in financial software implementation.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We pride ourselves on accuracy in every detail, ensuring compliance and optimal financial outcomes.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent advice you can trust. Your financial well-being is our top priority.'
    },
    {
      icon: Team,
      title: 'Partnership',
      description: 'We work alongside you as true partners, committed to your long-term success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous education and certification ensure we deliver the highest quality service.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Getting to know the team behind your financial success
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2005, Precision Accounting began with a simple mission: to provide honest, accurate, and personalized accounting services to help clients achieve financial clarity.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the past two decades, we've grown from a small local firm to a trusted advisor for hundreds of individuals and businesses across the nation. Yet our core values remain unchanged—we still treat every client like family.
              </p>
              <p className="text-lg text-gray-600">
                Today, our team of certified professionals combines decades of experience with cutting-edge technology to deliver exceptional service. We're not just number crunchers; we're strategic partners invested in your success.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop"
                alt="Our team"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your financial success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-emerald-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-emerald-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-emerald-100">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the hundreds of clients who trust Precision Accounting with their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}