import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  TrendingUp, 
  CheckSquare, 
  Globe, 
  Sparkles, 
  Check, 
  Brain
} from 'lucide-react';

const projectIconMap = {
  Brain: <Brain size={22} color="#ec4899" />,
  TrendingUp: <TrendingUp size={22} color="#38bdf8" />,
  CheckSquare: <CheckSquare size={22} color="#10b981" />,
  Globe: <Globe size={22} color="#a855f7" />
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Full Stack Web'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Projects & Work</span>
          </h2>
          <p className="section-subtitle">
            Practical software applications spanning Machine Learning regression models, responsive client-side task dashboards, and modern web architectures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: filter === cat 
                  ? '1px solid #38bdf8' 
                  : '1px solid rgba(255, 255, 255, 0.08)',
                background: filter === cat 
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(99, 102, 241, 0.25))' 
                  : 'rgba(15, 23, 42, 0.7)',
                color: filter === cat ? '#38bdf8' : '#94a3b8',
                boxShadow: filter === cat ? '0 0 15px rgba(56, 189, 248, 0.25)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.2rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                {/* Header Row: Category Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {projectIconMap[project.icon] || <FolderGit2 size={22} color="#38bdf8" />}
                  </div>

                  <span className="badge badge-cyan">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title & Category */}
                <h3 style={{ fontSize: '1.45rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                  {project.type}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '1.4rem' }}>
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.8rem' }}>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <span style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}>
                        <Check size={16} />
                      </span>
                      <span style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#94a3b8',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Code</span>
                  </a>

                  {project.id !== 'personal-portfolio' ? (
                    <a
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <span>Explore App</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <a
                      href="#hero"
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <span>Active Live</span>
                      <Sparkles size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
