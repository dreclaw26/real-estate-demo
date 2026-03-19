import { Shield, MessageSquare, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  const team = [
    {
      name: 'David Mitchell',
      role: 'Principal Conveyancer',
      bio: 'Over 20 years of experience in property law. David has settled over 3,000 properties and is a recognized expert in NSW conveyancing.',
      credentials: ['Licensed Conveyancer', 'Member of PEXA', 'Notary Public'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    },
    {
      name: 'Lisa Chen',
      role: 'Senior Conveyancer',
      bio: 'Specializes in commercial and complex residential transactions. Known for她的 meticulous attention to detail and excellent client communication.',
      credentials: ['Licensed Conveyancer', 'Certified Mediator', 'Law Society Member'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      name: 'James Robertson',
      role: 'Conveyancing Manager',
      bio: 'Leads our team of conveyancers with a focus on efficiency and client satisfaction. Extensive experience in off-the-plan purchases.',
      credentials: ['Licensed Conveyancer', 'Project Management Cert', 'Strata Specialist'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Sophie Williams',
      role: 'Client Relations Manager',
      bio: 'Your first point of contact. Sophie ensures smooth communication between clients and the legal team, keeping you informed every step.',
      credentials: ['Certified Client Manager', 'Notary Public', 'Legal Secretary Cert'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Park',
      role: 'Specialist Conveyancer',
      bio: 'Expert in commercial conveyancing and development sites. Works with major developers and institutional investors.',
      credentials: ['Licensed Conveyancer', 'Commercial Law Cert', 'Planning Law Specialist'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    },
    {
      name: 'Emma Thompson',
      role: 'Junior Conveyancer',
      bio: 'Recent law graduate with a passion for property law. Brings fresh perspective and dedication to every case.',
      credentials: ['Law Degree', 'Paralegal Cert', 'PEXA Certified'],
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop'
    }
  ];

  const strengths = [
    {
      icon: Shield,
      title: 'Qualified & Licensed',
      description: 'All our conveyancers are fully licensed and maintain current professional development.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'We pride ourselves on efficient processing without compromising quality.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Regular updates and plain English explanations. No legal jargon.'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in client service and professional conduct.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Meet the experienced professionals dedicated to your property success
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-primary-100">Properties Settled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-primary-100">Qualified Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Licensed Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Team Stands Out</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <strength.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Professionals</h2>
            <p className="text-xl text-gray-600">Your trusted advisors in property law</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((cred, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can help with your property transaction.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-bold rounded-lg hover:bg-primary-50 transition-colors text-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}