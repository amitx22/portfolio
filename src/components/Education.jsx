import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education <span className="gradient-text">& Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal educational milestones in Computer Science Engineering (AI) and secondary academic achievements.
          </p>
        </div>

        {/* Education Timeline */}
        <div 
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '2rem'
          }}
          className="timeline-container"
        >
          {/* Vertical Line */}
          <div 
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '15px',
              width: '2px',
              background: 'linear-gradient(to bottom, #38bdf8, #6366f1, rgba(255, 255, 255, 0.1))',
            }}
          />

          {portfolioData.education.map((edu, idx) => (
            <div 
              key={idx}
              style={{
                position: 'relative',
                marginBottom: '2.5rem'
              }}
            >
              {/* Timeline Node */}
              <div 
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '10px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#0f172a',
                  border: '2px solid #38bdf8',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  zIndex: 2
                }}
              >
                <GraduationCap size={16} />
              </div>

              {/* Education Card */}
              <div 
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderLeft: '3px solid #38bdf8'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div>
                    <span className="badge badge-cyan" style={{ marginBottom: '0.6rem' }}>
                      {edu.status}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', fontWeight: 700 }}>
                      {edu.degree}
                    </h3>
                  </div>

                  <div 
                    style={{
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      padding: '0.4rem 1rem',
                      borderRadius: '10px',
                      textAlign: 'right'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                      {edu.scoreType}
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                      {edu.score}
                    </div>
                  </div>
                </div>

                <div 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1.25rem', 
                    fontSize: '0.88rem', 
                    color: '#94a3b8',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0', fontWeight: 600 }}>
                    <Building2 size={15} color="#38bdf8" />
                    {edu.institution}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={15} color="#6366f1" />
                    {edu.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={15} color="#10b981" />
                    {edu.location}
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-container {
            padding-left: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
