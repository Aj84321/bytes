import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FestiveSeason from './components/FestiveSeason';
import PantryService from './components/PantryService';
// import Blog from './components/Blog';
// import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <FestiveSeason />
        <PantryService />
        {/* <Blog /> */}
        {/* <Career /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;