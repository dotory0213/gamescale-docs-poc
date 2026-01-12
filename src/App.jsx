import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import TrustedBy from './components/TrustedBy';
import Pricing from './components/Pricing';
import Docs from './components/Docs';
import Signup from './pages/Signup';
import DocsPage from './pages/DocsPage';
import SupportPage from './pages/SupportPage';

// Shared Layout for consistent Navbar/Footer
const SharedLayout = () => {
  return (
    <div className="min-h-screen bg-light text-dark selection:bg-primary/20 selection:text-dark flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="py-12 bg-white border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-warm-800 text-sm">
          <div className="font-serif font-bold text-dark text-lg mb-4 md:mb-0">
            GameScale
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-dark">Privacy</a>
            <a href="#" className="hover:text-dark">Terms</a>
            <a href="#" className="hover:text-dark">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Landing Page Content
const LandingPage = () => (
  <>
    <Hero />
    <TrustedBy />
    <Features />
    <Pricing />
    <Docs />
    <Testimonials />

    {/* Minimal CTA */}
    <section className="py-24 bg-dark text-white text-center">
      <h2 className="text-3xl font-serif mb-6 text-warm-50">Ready to scale?</h2>
      <a href="/signup" className="inline-block px-10 py-4 bg-white text-dark font-medium hover:bg-warm-100 transition-colors rounded-sm">
        Get Started Now
      </a>
    </section>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/docs" element={<DocsPage />}>
            <Route path=":slug" element={<DocsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
