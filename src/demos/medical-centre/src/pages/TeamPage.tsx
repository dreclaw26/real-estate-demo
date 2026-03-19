import { Link } from 'react-router-dom';
import { GraduationCap, Clock, ArrowRight } from 'lucide-react';
import { doctors } from '../data';

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-medical-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Team</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Meet the experienced, compassionate professionals dedicated to your health and wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
                  <p className="text-blue-700 font-medium mb-1">{doctor.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doctor.bio}</p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-start">
                      <GraduationCap className="h-4 w-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{doctor.education[0]}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>
                  <Link
                    to={`/team/${doctor.id}`}
                    className="text-blue-700 hover:text-medical-600 font-medium inline-flex items-center"
                  >
                    Full Profile
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Support Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Behind our medical practitioners is a team of dedicated nurses, administrative staff, and allied health professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { role: 'Registered Nurses', icon: '👩‍⚕️' },
              { role: 'Reception Staff', icon: '💁' },
              { role: 'Allied Health', icon: '🏃' },
              { role: 'Laboratory', icon: '🔬' },
            ].map((item) => (
              <div key={item.role} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900">{item.role}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented healthcare professionals to join HealthFirst Medical.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            View Opportunities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
