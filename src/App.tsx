import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResumeSamples from './components/ResumeSamples';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ResumeSamples />
        <Reviews />
        <FAQ />
        <GetStarted />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;