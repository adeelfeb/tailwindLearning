import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent';
import './index.css'; // Ensure Tailwind is included

function App() {
  return (
    <Router>
      <div className="bg-slate-300 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/*" element={<MainContent />} /> {/* This will handle any sub-routes */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
