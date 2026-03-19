import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 demo-real-estate">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="buy" element={<ListingsPage listingType="buy" />} />
          <Route path="rent" element={<ListingsPage listingType="rent" />} />
          <Route path="property/:id" element={<PropertyDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
