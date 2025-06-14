// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProviderList from './components/ProviderList';
import ProviderDetail from './components/ProviderDetail';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProviderList />} />
      <Route path="/providers" element={<ProviderList />} />
      <Route path="/providers/:id" element={<ProviderDetail />} />
    </Routes>
  </Router>
);

export default App;
