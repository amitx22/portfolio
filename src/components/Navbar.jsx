import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileDown, 
  Code2, 
  Send, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding Stats', href: '#coding' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'coding', 'projects', 'certificates', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(8, 12, 20, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem',
            textDecoration: 'none'
          }}
        >
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
              color: '#ffffff',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem'
            }}
          >
            AKS
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#f8fafc', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              {portfolioData.personal.name}
              <Sparkles size={15} color="#38bdf8" />
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              B.Tech CSE (AI) • TIU
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.75rem' 
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: isActive ? '#38bdf8' : '#94a3b8',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  padding: '0.3rem 0'
                }}
                onMouseEnter={(e) => e.target.style.color = '#38bdf8'}
                onMouseLeave={(e) => e.target.style.color = isActive ? '#38bdf8' : '#94a3b8'}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, #06b6d4, #6366f1)',
                      boxShadow: '0 0 8px #06b6d4'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <a
            href={portfolioData.personal.resumeUrl}
            download="Amit_Kumar_Singh_Resume.pdf"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex' }}
            title="Download Official Resume PDF"
          >
            <FileDown size={16} color="#38bdf8" />
            <span className="resume-btn-text">Resume</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex' }}
          >
            <Send size={15} />
            <span className="talk-btn-text">Hire Me</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(8, 12, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#e2e8f0',
                padding: '0.6rem 0.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {link.name}
              <ExternalLink size={15} color="#64748b" />
            </a>
          ))}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Amit_Kumar_Singh_Resume.pdf"
              className="btn btn-secondary"
              style={{ flex: 1, fontSize: '0.9rem' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileDown size={16} />
              Resume PDF
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ flex: 1, fontSize: '0.9rem' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Send size={15} />
              Let's Talk
            </a>
          </div>
        </div>
      )}

      {/* Responsive Styles for Navbar */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
          .talk-btn-text, .resume-btn-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
