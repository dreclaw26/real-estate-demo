import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RealEstateApp from './demos/real-estate/src/App';
import AccountingApp from './demos/accounting/src/App';
import ConveyancingApp from './demos/conveyancing/src/App';
import MortgageBrokerApp from './demos/mortgage-broker/src/App';
import MedicalCentreApp from './demos/medical-centre/src/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/real-estate" replace />} />
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
