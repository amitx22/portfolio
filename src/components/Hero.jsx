import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  Sparkles, 
  GraduationCap, 
  Code, 
  Terminal,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const titles = portfolioData.personal.titles;

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = titles[currentTitleIndex];

      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <section 
      id="hero" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '120px', 
        paddingBottom: '4rem',
        position: 'relative' 
      }}
    >
      <div className="container">
        
        {/* Main 2-Column Hero Layout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 0.9fr', 
            gap: '3.5rem', 
            alignItems: 'center' 
          }}
          className="hero-grid"
        >
          
          {/* Left Column: Bio & Intro */}
          <div>
            
            {/* Status Pill Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-full)',
                color: '#34d399',
                fontSize: '0.86rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.15)'
              }}
            >
              <span 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  animation: 'pulseGlow 2s infinite'
                }}
              />
              <span>Open to Software Engineering & AI Opportunities</span>
            </div>

            {/* Main Greeting and Name */}
            <h1 
              style={{ 
                fontSize: '3.3rem', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}
              className="hero-name"
            >
              Hi, I'm <br />
              <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>

            {/* Animated Typing Title */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem',
                fontSize: '1.5rem', 
                fontWeight: 600, 
                color: '#38bdf8', 
                minHeight: '2.5rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)'
              }}
              className="hero-typewriter"
            >
              <span>&gt;</span>
              <span>{displayedText}</span>
              <span 
                style={{ 
                  display: 'inline-block', 
                  width: '3px', 
                  height: '1.4rem', 
                  background: '#38bdf8',
                  animation: 'pulseGlow 1s infinite'
                }} 
              />
            </div>

            {/* Bio Paragraph */}
            <p 
              style={{ 
                fontSize: '1.08rem', 
                color: '#94a3b8', 
                lineHeight: 1.7, 
                marginBottom: '2rem',
                maxWidth: '580px'
              }}
            >
              Undergraduate at <strong style={{ color: '#f8fafc' }}>Techno India University, Kolkata</strong> (CGPA: 8.37) specializing in <strong style={{ color: '#38bdf8' }}>Artificial Intelligence</strong>. Passionate about architecting scalable web applications, machine learning systems, and solving complex algorithmic challenges.
            </p>

            {/* CTA Buttons */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '1rem', 
                alignItems: 'center', 
                marginBottom: '2.5rem' 
              }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href={portfolioData.personal.resumeUrl} 
                download="Amit_Kumar_Singh_Resume.pdf"
                className="btn btn-secondary btn-lg"
                title="Download verified resume PDF"
              >
                <FileDown size={18} color="#38bdf8" />
                <span>Get Resume PDF</span>
              </a>

              <a href="#contact" className="btn btn-outline-cyan">
                <span>Contact Me</span>
              </a>
            </div>

            {/* Direct Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect:
              </span>
              
              <a 
                href={portfolioData.personal.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1e293b';
                  e.currentTarget.style.color = '#38bdf8';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#38bdf8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title="GitHub: amitx22"
              >
                <GithubIcon size={20} />
              </a>

              <a 
                href={portfolioData.personal.linkedinUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1e293b';
                  e.currentTarget.style.color = '#38bdf8';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#38bdf8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title="LinkedIn: amitkumarsingh1527"
              >
                <LinkedinIcon size={20} />
              </a>

              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1e293b';
                  e.currentTarget.style.color = '#38bdf8';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#38bdf8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title={`Email: ${portfolioData.personal.email}`}
              >
                <Mail size={20} />
              </a>

              <a 
                href={`tel:${portfolioData.personal.phone}`} 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1e293b';
                  e.currentTarget.style.color = '#38bdf8';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#38bdf8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title={`Phone: ${portfolioData.personal.phone}`}
              >
                <Phone size={20} />
              </a>
            </div>

          </div>

          {/* Right Column: Premium Profile Card with Neon Aura & Floating Chips */}
          <div 
            style={{ 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            {/* Glowing background halo */}
            <div 
              style={{
                position: 'absolute',
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0,
                animation: 'pulseGlow 4s ease-in-out infinite alternate'
              }}
            />

            {/* Profile Avatar Frame */}
            <div 
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '10px',
                borderRadius: '32px',
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.6), rgba(99, 102, 241, 0.3), rgba(16, 185, 129, 0.5))',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.35)'
              }}
            >
              <div 
                style={{
                  borderRadius: '26px',
                  overflow: 'hidden',
                  width: '340px',
                  height: '380px',
                  background: '#0f172a',
                  position: 'relative'
                }}
                className="avatar-container"
              >
                <img 
                  src={portfolioData.personal.avatar} 
                  alt={portfolioData.personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                />
                
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.2rem',
                    background: 'linear-gradient(to top, rgba(8, 12, 20, 0.95) 0%, rgba(8, 12, 20, 0.6) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f8fafc', fontWeight: 700, fontSize: '1.05rem' }}>
                    <span>{portfolioData.personal.name}</span>
                    <CheckCircle2 size={16} color="#38bdf8" />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                    B.Tech CSE (AI) • 2023 - 2027
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Highlight Chip 1: LeetCode */}
            <div 
              className="anim-float"
              style={{
                position: 'absolute',
                top: '5%',
                left: '-15px',
                zIndex: 2,
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                borderRadius: '14px',
                padding: '0.7rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(245, 158, 11, 0.25)'
              }}
            >
              <div 
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f59e0b'
                }}
              >
                <Code size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>LeetCode Rating</div>
                <div style={{ fontWeight: 800, color: '#fbbf24', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
                  1603 Max
                </div>
              </div>
            </div>

            {/* Floating Highlight Chip 2: CGPA */}
            <div 
              className="anim-float"
              style={{
                position: 'absolute',
                bottom: '8%',
                right: '-20px',
                zIndex: 2,
                animationDelay: '1.5s',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '14px',
                padding: '0.7rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.25)'
              }}
            >
              <div 
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <GraduationCap size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>TIU Kolkata</div>
                <div style={{ fontWeight: 800, color: '#38bdf8', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
                  CGPA: 8.37
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Highlights Bar */}
        <div 
          style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem'
          }}
          className="hero-stats-grid"
        >
          {portfolioData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card"
              style={{
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                textAlign: 'center',
                alignItems: 'center'
              }}
            >
              <div 
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '-0.02em'
                }}
                className="gradient-text-cyan"
              >
                {stat.value}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive Breakpoint styling */}
      <style>{`
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-name {
            font-size: 2.6rem !important;
          }
          .hero-typewriter {
            justify-content: center;
          }
          .avatar-container {
            width: 280px !important;
            height: 320px !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .hero-name {
            font-size: 2.2rem !important;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
