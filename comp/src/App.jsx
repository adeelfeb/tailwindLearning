// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
// import MainContent from './MainContent';
import './index.css'; // Ensure Tailwind is included

function App() {
  return (
    <Router>
      <div className="bg-blue-100 min-h-screen">
        <Header />
        <Routes>
          {/* <Route path="/" element={<MainContent />} /> */}
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
