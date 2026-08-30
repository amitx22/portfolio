import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  User, 
  BrainCircuit, 
  Code2, 
  Layers, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  CheckCircle,
  FileCheck2
} from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <BrainCircuit size={24} color="#38bdf8" />,
      title: "AI & Machine Learning",
      description: "Hands-on experience developing ML prediction pipelines with Scikit-learn, preprocessing datasets with Pandas and NumPy, and deploying web apps using Streamlit.",
      accent: "#38bdf8"
    },
    {
      icon: <Code2 size={24} color="#10b981" />,
      title: "Full-Stack Development",
      description: "Crafting performant and modern web applications with React, JavaScript (ES6+), HTML5, CSS3, LocalStorage API, and REST backend architectures with Node/Express.",
      accent: "#10b981"
    },
    {
      icon: <Layers size={24} color="#8b5cf6" />,
      title: "Algorithmic Problem Solving",
      description: "Solid foundation in C++, Data Structures & Algorithms with an active contest rating of 1603 on LeetCode, CodeChef 1-Star, and HackerRank 3-Star.",
      accent: "#8b5cf6"
    }
  ];

  const quickDetails = [
    { label: "Degree", value: "B.Tech CSE (Artificial Intelligence)", icon: <GraduationCap size={16} /> },
    { label: "University", value: "Techno India University, Kolkata", icon: <Layers size={16} /> },
    { label: "Academic CGPA", value: "8.37 / 10.00", icon: <CheckCircle size={16} /> },
    { label: "Location", value: "Kolkata, WB / Kaimur, Bihar", icon: <MapPin size={16} /> },
    { label: "Email", value: portfolioData.personal.email, icon: <Mail size={16} /> },
    { label: "Phone", value: portfolioData.personal.phone, icon: <Phone size={16} /> },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Discover Amit</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">My Journey & Expertise</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science student blending algorithmic rigor with modern software engineering and artificial intelligence.
          </p>
        </div>

        {/* Narrative & Detail Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 0.8fr', 
            gap: '2.5rem', 
            marginBottom: '3rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          
          {/* Left: Detailed Story */}
          <div className="glass-card" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>Driven by curiosity & code</span>
              <Sparkles size={20} color="#38bdf8" />
            </h3>
            
            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '1.2rem' }}>
              I am currently pursuing my <strong>B.Tech in Computer Science and Engineering (Artificial Intelligence)</strong> at <strong>Techno India University, Kolkata</strong> (2023 – 2027) with a current CGPA of <strong>8.37</strong>.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#94a3b8', marginBottom: '1.2rem' }}>
              My technical journey is grounded in strong fundamentals: mastering <strong>C++</strong>, <strong>Data Structures & Algorithms</strong>, and core systems coursework including <em>Operating Systems, DBMS, Computer Networks, and OOP</em>. I bridge theoretical knowledge with real-world applications by developing full-stack web platforms and machine learning applications.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#94a3b8', marginBottom: '1.8rem' }}>
              Beyond coursework, I actively challenge myself with competitive programming on <strong>LeetCode (Max Rating 1603)</strong> and have completed multiple industry-aligned virtual simulations with global leaders like <strong>Deloitte, Accenture, IBM, and Tata</strong>.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <span className="badge badge-cyan">C++ & DSA</span>
              <span className="badge badge-emerald">React.js & Web</span>
              <span className="badge badge-violet">Scikit-learn & Python</span>
              <span className="badge badge-amber">SQL & MySQL</span>
              <span className="badge badge-cyan">Problem Solver</span>
            </div>
          </div>

          {/* Right: Key Fast Facts */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem' 
            }}
          >
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '1.2rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                // Fast Facts
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {quickDetails.map((detail, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.8rem',
                      padding: '0.6rem 0',
                      borderBottom: idx !== quickDetails.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                    }}
                  >
                    <div style={{ color: '#38bdf8', marginTop: '3px' }}>
                      {detail.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                        {detail.label}
                      </div>
                      <div style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 600 }}>
                        {detail.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(99, 102, 241, 0.1))',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  flexShrink: 0
                }}
              >
                <FileCheck2 size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>
                  Ready to Contribute
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  Available for full-time roles, internships, and engineering projects.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Pillars of Competence */}
        <div className="grid-3">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
                borderTop: `3px solid ${pillar.accent}`
              }}
            >
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#f8fafc' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
