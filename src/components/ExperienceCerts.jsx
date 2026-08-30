import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Award, 
  Briefcase, 
  Brain, 
  Sparkles, 
  BarChart2, 
  Layers, 
  Calendar, 
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

const certIconMap = {
  Briefcase: <Briefcase size={22} color="#06b6d4" />,
  Brain: <Brain size={22} color="#10b981" />,
  Award: <Award size={22} color="#f59e0b" />,
  Sparkles: <Sparkles size={22} color="#a855f7" />,
  BarChart2: <BarChart2 size={22} color="#3b82f6" />,
  Layers: <Layers size={22} color="#14b8a6" />
};

const ExperienceCerts = () => {
  return (
    <section id="certificates" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>Industry Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Job Simulations</span>
          </h2>
          <p className="section-subtitle">
            Industry-level practical simulations and certified credentials in Machine Learning, Generative AI Data Analytics, and Enterprise Technology Consulting.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid-3">
          {portfolioData.certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.8rem',
                borderLeft: '3px solid #38bdf8'
              }}
            >
              <div>
                {/* Header: Icon & Issuer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {certIconMap[cert.icon] || <Award size={22} color="#38bdf8" />}
                  </div>

                  <span className="badge badge-emerald">
                    <CheckCircle size={12} />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Title and Issuer */}
                <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>
                
                <div 
                  style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 700, 
                    color: '#38bdf8', 
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.9rem' 
                  }}
                >
                  {cert.issuer}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  {cert.description}
                </p>
              </div>

              {/* Completion Date */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  paddingTop: '0.9rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.82rem',
                  color: '#64748b',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Calendar size={14} color="#38bdf8" />
                <span>Issued: <strong style={{ color: '#cbd5e1' }}>{cert.date}</strong></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceCerts;
