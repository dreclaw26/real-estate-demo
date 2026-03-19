import React from 'react';
import { Star, ThumbsUp, MessageSquare, ArrowRight, User, Home, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah & James Wilson',
      type: 'First Home Buyers',
      rating: 5,
      text: 'We were first-time buyers and absolutely clueless about the whole process. Clear Title held our hand from start to finish. They explained everything in plain English and made what we thought would be stressful actually enjoyable. Our conveyancer, Lisa, was amazing - always available to answer our questions. We couldn\'t be happier with our new home!',
      date: 'January 2024',
      service: 'residential'
    },
    {
      name: 'Michael Chen',
      type: 'Commercial Investor',
      rating: 5,
      text: 'As a commercial property investor, I need a conveyancing team that understands complex transactions and can move quickly. Clear Title delivered on both fronts. They handled a multi-million dollar office building purchase with exceptional professionalism. Their due diligence uncovered issues we would have missed, saving us significant risk.',
      date: 'December 2023',
      service: 'commercial'
    },
    {
      name: 'Rebecca Thompson',
      type: 'Property Developer',
      rating: 5,
      text: 'We\'ve worked with many conveyancers over our 15 years in development, and Clear Title is by far the best. Their knowledge of off-the-plan contracts and sunset clauses is unparalleled. They protected our interests on a recent townhouse development project, and their attention to detail was impressive.',
      date: 'November 2023',
      service: 'commercial'
    },
    {
      name: 'David & Emma Johnson',
      type: 'Upsizers',
      rating: 5,
      text: 'We were selling our family home and buying a larger one simultaneously - a stressful combination. David Mitchell personally oversaw both transactions, coordinating settlement dates perfectly. We sold for above asking and bought our dream home without any hiccups. Worth every penny!',
      date: 'October 2023',
      service: 'residential'
    },
    {
      name: 'Alicia Foster',
      type: 'First Home Buyer',
      rating: 5,
      text: 'After a bad experience with another conveyancer, I was nervous. But the team at Clear Title restored my faith. Sophie in client relations was so reassuring, keeping me updated every step. The online portal was brilliant - I could see exactly what was happening. Highly recommend to anyone!',
      date: 'September 2023',
      service: 'residential'
    },
    {
      name: 'Peter Stratton',
      type: 'Business Owner',
      rating: 5,
      text: 'We purchased a commercial warehouse for our manufacturing business. The transaction had some complexities with zoning and easements. Clear Title navigated these expertly, working directly with the council and previous owner to resolve issues before settlement. Their commercial expertise is genuine.',
      date: 'August 2023',
      service: 'commercial'
    },
    {
      name: 'Jennifer Lee',
      type: 'Property Investor',
      rating: 5,
      text: 'I own several investment properties and use Clear Title for all my transactions. Their fixed pricing gives me confidence, and their speed means I can move on opportunities quickly. James and his team have settled dozens of properties for me - always on time, always accurate.',
      date: 'July 2023',
      service: 'residential'
    },
    {
      name: 'Mark & Chloe Davies',
      type: 'Downsizers',
      rating: 5,
      text: 'At 70, we wanted a stress-free move to a smaller property. Clear Title made it happen. They arranged everything, even coordinating with the real estate agent and our removalist. The team was patient, kind, and incredibly thorough. We felt supported throughout.',
      date: 'June 2023',
      service: 'residential'
    }
  ];

  const serviceCounts = {
    residential: testimonials.filter(t => t.service === 'residential').length,
    commercial: testimonials.filter(t => t.service === 'commercial').length
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  const getServiceIcon = (service: string) => {
    return service === 'residential' ? Home : Building;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 text-white text-center">
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-primary-100 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{serviceCounts.residential}+</div>
              <div className="text-primary-100 text-sm">Residential Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{serviceCounts.commercial}+</div>
              <div className="text-primary-100 text-sm">Commercial Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-primary-100 text-sm">Recommend Us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      {React.createElement(getServiceIcon(testimonial.service), {
                        className: 'h-5 w-5 text-primary-600'
                      })}
                    </div>
                    <span className="text-sm font-medium text-primary-600">{testimonial.type}</span>
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>

                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-primary-600">
                    <ThumbsUp className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google/Review Sites Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Google</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600 mt-1">4.9 (127 reviews)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">ProductReview</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600 mt-1">4.8 (89 reviews)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">TrueLocal</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600 mt-1">5.0 (56 reviews)</div>
            </div>
          </div>
          <p className="text-gray-600">
            Our commitment to excellence is reflected in thousands of positive reviews across major platforms.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Had a great experience with us? We'd love to hear from you. And if you're looking for conveyancing services, see why so many clients choose us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-bold rounded-lg hover:bg-primary-50 transition-colors text-lg"
            >
              <MessageSquare className="mr-2 h-6 w-6" />
              Write a Review
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-800 transition-colors text-lg"
            >
              Back to Home
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}