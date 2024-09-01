// MainContent.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import ContactPage from './ContactPage';


function MainContent() {
  return (
    <div> 
        {/* className="m-8 mx-auto items-center space-x-4 rounded-xl bg-white p-8" */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default MainContent;
