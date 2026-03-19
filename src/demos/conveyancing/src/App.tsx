import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import TestimonialsPage from './pages/TestimonialsPage';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 demo-conveyancing">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;