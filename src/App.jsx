import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CodingStats from './components/CodingStats';
import Projects from './components/Projects';
import ExperienceCerts from './components/ExperienceCerts';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <CodingStats />
        <Projects />
        <ExperienceCerts />
        <Education />
        <Contact onNotify={showToast} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Toast Notification Container */}
      {toast && (
        <div className="toast-container">
          <div className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-error'}`}>
            {toast.type === 'success' ? (
              <CheckCircle2 size={20} color="#10b981" />
            ) : (
              <AlertCircle size={20} color="#ef4444" />
            )}
            <div style={{ flex: 1, fontWeight: 500 }}>
              {toast.message}
            </div>
            <button
              onClick={() => setToast(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                padding: '2px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
