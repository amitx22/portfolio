import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Award, 
  Terminal, 
  ExternalLink, 
  Zap, 
  Flame, 
  Trophy,
  CheckCircle2
} from 'lucide-react';

const CodingStats = () => {
  return (
    <section id="coding" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="section-title">
            Competitive <span className="gradient-text">Coding Profiles</span>
          </h2>
          <p className="section-subtitle">
            Consistent algorithmic practice, contest ratings, and verified badges across leading competitive programming platforms.
          </p>
        </div>

        {/* 3 Main Coding Cards */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {portfolioData.codingProfiles.map((profile, idx) => (
            <div 
              key={idx} 
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                borderTop: `4px solid ${profile.accent}`,
                position: 'relative'
              }}
            >
              <div>
                {/* Top Row: Icon and Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `rgba(${profile.accent === '#f59e0b' ? '245, 158, 11' : profile.accent === '#10b981' ? '16, 185, 129' : '217, 119, 6'}, 0.15)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: profile.accent
                    }}
                  >
                    {profile.platform === 'LeetCode' && <Code2 size={24} />}
                    {profile.platform === 'CodeChef' && <Award size={24} />}
                    {profile.platform === 'HackerRank' && <Terminal size={24} />}
                  </div>

                  <span 
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      background: `rgba(${profile.accent === '#f59e0b' ? '245, 158, 11' : profile.accent === '#10b981' ? '16, 185, 129' : '217, 119, 6'}, 0.12)`,
                      border: `1px solid ${profile.accent}40`,
                      color: profile.accent,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {profile.badge}
                  </span>
                </div>

                {/* Platform Name & Metric */}
                <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                  {profile.platform}
                </h3>
                
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                    {profile.metricName}
                  </div>
                  <div 
                    style={{ 
                      fontSize: '2rem', 
                      fontWeight: 800, 
                      color: profile.accent,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {profile.rating}
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {profile.description}
                </p>
              </div>

              {/* Action Button to View Profile */}
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  borderColor: `${profile.accent}30`
                }}
              >
                <span>View {profile.platform} Profile</span>
                <ExternalLink size={14} color={profile.accent} />
              </a>
            </div>
          ))}
        </div>

        {/* Algorithmic Methodology Banner */}
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(99, 102, 241, 0.08))',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}
          className="coding-methodology"
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ color: '#38bdf8', marginTop: '2px' }}>
              <Zap size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1rem', marginBottom: '0.3rem' }}>
                Time & Space Optimization
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Analyzing asymptotic complexity to engineer $O(N)$ and $O(\log N)$ optimal solutions.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ color: '#10b981', marginTop: '2px' }}>
              <Flame size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1rem', marginBottom: '0.3rem' }}>
                Core DSA Mastery
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Hands-on depth in Arrays, HashMaps, Two Pointers, Trees, Graphs, and Dynamic Programming.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ color: '#f59e0b', marginTop: '2px' }}>
              <CheckCircle2 size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1rem', marginBottom: '0.3rem' }}>
                Clean C++ & Java Code
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Writing maintainable, modular, and standard compliant solutions.
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .coding-methodology {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CodingStats;
