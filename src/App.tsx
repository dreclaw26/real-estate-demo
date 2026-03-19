import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import RealEstateApp from './demos/real-estate/src/App';
import AccountingApp from './demos/accounting/src/App';
import ConveyancingApp from './demos/conveyancing/src/App';
import MortgageBrokerApp from './demos/mortgage-broker/src/App';
import MedicalCentreApp from './demos/medical-centre/src/App';
import LandingPage from './components/LandingPage';

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'Precision Web Solutions | Professional Web Developer Portfolio';

    if (path.startsWith('/real-estate')) {
      title = 'Real Estate Demo | Precision Web Solutions';
    } else if (path.startsWith('/accounting')) {
      title = 'Accounting Demo | Precision Web Solutions';
    } else if (path.startsWith('/conveyancing')) {
      title = 'Conveyancing Demo | Precision Web Solutions';
    } else if (path.startsWith('/mortgage-broker')) {
      title = 'Mortgage Broker Demo | Precision Web Solutions';
    } else if (path.startsWith('/medical-centre')) {
      title = 'Medical Centre Demo | Precision Web Solutions';
    }

    document.title = title;
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/real-estate/*" element={<RealEstateApp />} />
        <Route path="/accounting/*" element={<AccountingApp />} />
        <Route path="/conveyancing/*" element={<ConveyancingApp />} />
        <Route path="/mortgage-broker/*" element={<MortgageBrokerApp />} />
        <Route path="/medical-centre/*" element={<MedicalCentreApp />} />
      </Routes>
    </Router>
  );
}

export default App;
