import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Heart, 
  Code2, 
  Sparkles 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: 'rgba(5, 8, 14, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Top Row: Brand & Quick Navigation */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div 
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                fontSize: '1.15rem'
              }}
            >
              AKS
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>
                {portfolioData.personal.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                B.Tech CSE (AI) • Techno India University
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '0.85rem' }}>
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f8fafc',
                transition: 'all 0.2s ease'
              }}
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f8fafc',
                transition: 'all 0.2s ease'
              }}
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f8fafc',
                transition: 'all 0.2s ease'
              }}
              title="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href={`tel:${portfolioData.personal.phone}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f8fafc',
                transition: 'all 0.2s ease'
              }}
              title="Phone"
            >
              <Phone size={18} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)'
              }}
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.75rem',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Designed & Built with React 18, Vite &</span>
            <Heart size={14} color="#ef4444" fill="#ef4444" />
            <span>by Amit Kumar Singh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
