// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import Review from './components/Review';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <Review />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
