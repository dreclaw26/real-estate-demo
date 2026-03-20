import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, MessageSquare, CheckCircle, Scissors } from 'lucide-react';
import { services, barbers, timeSlots, contactInfo } from '../data';

export default function BookingPage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getAvailableTimes = () => {
    return timeSlots;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const service = services.find(s => s.id === selectedService);
    const barber = barbers.find(b => b.id === selectedBarber);

    const bookingData = {
      serviceId: selectedService,
      serviceName: service?.title || '',
      barberId: selectedBarber,
      barberName: barber?.name || 'Any Available Barber',
      date: selectedDate,
      time: selectedTime,
      name,
      email,
      phone,
      notes
    };

    console.log('Booking submitted:', bookingData);

    setIsSubmitted(true);

    setTimeout(() => {
      navigate('/contact', {
        state: {
          bookingConfirmed: true,
          bookingDetails: bookingData
        }
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-charcoal-900 rounded-2xl border border-charcoal-800">
          <div className="bg-barber-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-barber-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Booking Requested!</h2>
          <p className="text-gray-400 mb-6">
            Thank you, {name}! We've received your booking request for {selectedDate} at {selectedTime}.
          </p>
          <p className="text-gray-400 mb-8">
            We'll send a confirmation to {email} shortly. See you soon!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-barber-500 hover:bg-barber-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go to Contact
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-charcoal-900 to-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your service, select a time, and we'll take care of the rest. Walk-ins welcome, but appointments are recommended.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Scissors className="h-5 w-5 mr-2 text-barber-400" />
                Select Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg text-left transition-all ${
                      selectedService === service.id
                        ? 'bg-barber-500 text-white border-2 border-barber-400'
                        : 'bg-charcoal-800 text-gray-300 border-2 border-transparent hover:border-charcoal-600'
                    }`}
                  >
                    <div className="font-semibold">{service.title}</div>
                    <div className={`text-sm ${selectedService === service.id ? 'text-white/80' : 'text-gray-500'} mt-1`}>
                      {service.duration} • {service.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Barber Selection */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-barber-400" />
                Select Barber
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBarber('')}
                  className={`p-4 rounded-lg text-left transition-all ${
                    selectedBarber === ''
                      ? 'bg-barber-500 text-white border-2 border-barber-400'
                      : 'bg-charcoal-800 text-gray-300 border-2 border-transparent hover:border-charcoal-600'
                  }`}
                >
                  <div className="font-semibold">Any Available Barber</div>
                  <div className={`text-sm ${selectedBarber === '' ? 'text-white/80' : 'text-gray-500'} mt-1`}>
                    We'll assign the best available
                  </div>
                </button>
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    type="button"
                    onClick={() => setSelectedBarber(barber.id)}
                    className={`p-4 rounded-lg text-left transition-all ${
                      selectedBarber === barber.id
                        ? 'bg-barber-500 text-white border-2 border-barber-400'
                        : 'bg-charcoal-800 text-gray-300 border-2 border-transparent hover:border-charcoal-600'
                    }`}
                  >
                    <div className="font-semibold">{barber.name.split(' ')[0]}</div>
                    <div className={`text-sm ${selectedBarber === barber.id ? 'text-white/80' : 'text-gray-500'} mt-1`}>
                      {barber.specialty}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-barber-400" />
                Select Date & Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    min={getMinDate()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-barber-400" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      disabled={!selectedDate}
                      className="flex-1 bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500 disabled:opacity-50"
                    >
                      <option value="">Select a time</option>
                      {getAvailableTimes().map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-barber-400" />
                Your Contact Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                    placeholder="John Smith"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                      placeholder="(02) 1234 5678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <MessageSquare className="h-4 w-4 inline mr-1" />
                    Additional Notes (optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barber-500"
                    placeholder="Any special requests or information we should know?"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!selectedService || !selectedDate || !selectedTime || !name || !email || !phone}
                className="inline-flex items-center bg-barber-500 hover:bg-barber-400 disabled:bg-charcoal-700 disabled:cursor-not-allowed text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 disabled:transform-none"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-charcoal-900 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">{contactInfo.phone}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">{contactInfo.email}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Hours</h3>
              <p className="text-gray-400 text-sm">Mon-Thu: 9am-8pm • Fri-Sat: 9am-6pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
