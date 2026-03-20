import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data';

export default function ContactPage() {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const bookingConfirmed = location.state?.bookingConfirmed;
  const bookingDetails = location.state?.bookingDetails;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-charcoal-900 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Booking Confirmation Banner */}
      {bookingConfirmed && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-barber-900 border border-barber-500 rounded-2xl p-6 flex items-start space-x-4">
            <div className="bg-barber-500/20 rounded-full p-2">
              <CheckCircle className="h-6 w-6 text-barber-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Booking Request Confirmed!</h3>
              <p className="text-gray-300">
                Your appointment has been requested for <span className="text-barber-400 font-semibold">{bookingDetails?.date}</span> at <span className="text-barber-400 font-semibold">{bookingDetails?.time}</span>.
                We'll send a confirmation to {bookingDetails?.email} shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal-800 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-barber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal-800 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-barber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal-800 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-barber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal-800 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-barber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Hours</h3>
                    <div className="space-y-1 text-sm text-gray-400">
                      <p><span className="w-24 inline-block">Monday</span> {contactInfo.hours.monday}</p>
                      <p><span className="w-24 inline-block">Tuesday</span> {contactInfo.hours.tuesday}</p>
                      <p><span className="w-24 inline-block">Wednesday</span> {contactInfo.hours.wednesday}</p>
                      <p><span className="w-24 inline-block">Thursday</span> {contactInfo.hours.thursday}</p>
                      <p><span className="w-24 inline-block">Friday</span> {contactInfo.hours.friday}</p>
                      <p><span className="w-24 inline-block">Saturday</span> {contactInfo.hours.saturday}</p>
                      <p><span className="w-24 inline-block">Sunday</span> {contactInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-barber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-barber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                          placeholder="(02) 1234 5678"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-barber-500 hover:bg-barber-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-charcoal-900 border border-charcoal-800 rounded-2xl p-8 text-center">
                <MapPin className="h-12 w-12 text-barber-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Visit Our Shop</h3>
                <p className="text-gray-400 text-sm">
                  123 Main Street, Sydney NSW 2000<br />
                  Located in the heart of the city, easy to find.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
