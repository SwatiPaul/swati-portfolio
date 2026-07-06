import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Layout from './components/Layout';
import { Toaster } from './components/ui/toaster';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="App grain">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <CookieBanner />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
