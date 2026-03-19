import { Star, ThumbsUp, Quote, ArrowRight } from 'lucide-react';
import { testimonials } from '../data';

export default function TestimonialsPage() {
  const ratingStats = {
    average: 4.9,
    total: 237,
    distribution: [
      { stars: 5, count: 210, percentage: 89 },
      { stars: 4, count: 20, percentage: 8 },
      { stars: 3, count: 5, percentage: 2 },
      { stars: 2, count: 2, percentage: 1 },
      { stars: 1, count: 0, percentage: 0 },
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
            <div className="flex justify-center items-center space-x-2 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
              <span className="text-2xl font-semibold ml-2">4.9 out of 5</span>
            </div>
            <p className="text-xl text-gray-300">
              Based on {ratingStats.total} verified customer reviews
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-teal-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-teal-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2B+</div>
              <div className="text-teal-100">Loans Settled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6"> customer Ratings</h2>
          <div className="space-y-3">
            {ratingStats.distribution.map((item) => (
              <div key={item.stars} className="flex items-center">
                <div className="w-20 text-sm font-medium text-gray-700">
                  {item.stars} star{item.stars > 1 ? 's' : ''}
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-sm text-gray-600 text-right">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-6 relative">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-teal-200" />

                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current inline" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-gray-500 text-sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>Verified client</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Clients?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the HomeLoan Pro difference. Book your free consultation today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
