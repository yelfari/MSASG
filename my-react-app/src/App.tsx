import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home'; 
import Events from './pages/events';
import Contact from './pages/contact';
import Statuten from './pages/statuten';
import About from './pages/about';


const App: React.FC = () => {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
};

const AppWithRouter: React.FC = () => {

  const location = useLocation();
  const shouldShowFooter = location.pathname !== '/statuten';

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/statuten" element={<Statuten />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default App;
