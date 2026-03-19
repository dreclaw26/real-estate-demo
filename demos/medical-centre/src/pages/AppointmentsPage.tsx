import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { doctors, timeSlots } from '../data';

export default function AppointmentsPage() {
  const [step, setStep] = useState<'select-doctor' | 'select-time' | 'confirmation'>('select-doctor');
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [patientInfo, setPatientInfo] = useState({ name: '', email: '', phone: '' });
  const [booked, setBooked] = useState(false);

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Skip weekends
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const availableDates = generateDates();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  if (booked) {
    return (
      <div className="flex flex-col">
        <section className="bg-gradient-to-br from-blue-700 to-medical-700 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Appointment Confirmed!</h1>
            <p className="text-xl text-blue-100 mb-8">
              Thank you for booking with HealthFirst Medical.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-blue-200 text-sm">Doctor</p>
                  <p className="font-semibold">{doctors.find(d => d.id === selectedDoctor)?.name}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Date</p>
                  <p className="font-semibold">{new Date(selectedDate).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Time</p>
                  <p className="font-semibold">{selectedTime}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Patient</p>
                  <p className="font-semibold">{patientInfo.name}</p>
                </div>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              A confirmation email has been sent to {patientInfo.email}
            </p>
            <button
              onClick={() => {
                setBooked(false);
                setStep('select-doctor');
                setSelectedDoctor(null);
                setSelectedDate('');
                setSelectedTime(null);
                setPatientInfo({ name: '', email: '', phone: '' });
              }}
              className="text-blue-200 hover:text-white underline"
            >
              Book another appointment
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-medical-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule your visit in just a few easy steps. Choose your preferred doctor, date, and time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {['Select Doctor', 'Choose Time', 'Your Details'].map((label, idx) => (
                <div key={label} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    (step === 'select-doctor' && idx === 0) ||
                    (step === 'select-time' && idx === 1) ||
                    (step === 'confirmation' && idx === 2)
                      ? 'bg-blue-700 text-white'
                      : idx < (step === 'select-doctor' ? 0 : step === 'select-time' ? 1 : 2)
                      ? 'bg-medical-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {idx + 1}
                  </div>
                  <span className="ml-2 text-sm font-medium hidden sm:inline text-gray-700">{label}</span>
                  {idx < 2 && <div className="w-12 h-1 mx-4 bg-gray-200"><div className={`h-full ${idx < (step === 'select-doctor' ? 0 : step === 'select-time' ? 1 : 2) ? 'bg-medical-500' : ''}`} style={{ width: idx < (step === 'select-doctor' ? 0 : step === 'select-time' ? 1 : 2) ? '100%' : '0%' }}></div></div>}
                </div>
              ))}
            </div>
          </div>

          {step === 'select-doctor' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Doctor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor.id)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedDoctor === doctor.id
                        ? 'border-blue-700 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-blue-700 text-sm">{doctor.role}</p>
                        <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStep('select-time')}
                disabled={!selectedDoctor}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}

          {step === 'select-time' && (
            <div>
              <button
                onClick={() => setStep('select-doctor')}
                className="text-blue-700 hover:text-blue-800 mb-6 font-medium flex items-center"
              >
                ← Back to doctors
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Date & Time</h2>
              <p className="text-gray-600 mb-6">
                {doctors.find(d => d.id === selectedDoctor)?.name}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Dates</h3>
                <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                  {availableDates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                        selectedDate === date
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-gray-200 hover:border-blue-300 text-gray-700'
                      }`}
                    >
                      <div>{new Date(date).toLocaleDateString('en-AU', { weekday: 'short' })}</div>
                      <div>{new Date(date).getDate()}</div>
                      <div>{new Date(date).toLocaleDateString('en-AU', { month: 'short' })}</div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Times</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          selectedTime === time
                            ? 'border-blue-700 bg-blue-700 text-white'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setStep('confirmation')}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}

          {step === 'confirmation' && (
            <div>
              <button
                onClick={() => setStep('select-time')}
                className="text-blue-700 hover:text-blue-800 mb-6 font-medium flex items-center"
              >
                ← Back to time selection
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h2>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      value={patientInfo.name}
                      onChange={(e) => setPatientInfo({...patientInfo, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      value={patientInfo.email}
                      onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    value={patientInfo.phone}
                    onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
                  />
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Appointment Summary</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Doctor</p>
                      <p className="font-medium">{doctors.find(d => d.id === selectedDoctor)?.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-medium">{new Date(selectedDate).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Time</p>
                      <p className="font-medium">{selectedTime}</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Confirm Booking
                  <CheckCircle className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
