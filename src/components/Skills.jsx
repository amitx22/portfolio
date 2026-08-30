import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  Code, 
  Globe, 
  Database, 
  BrainCircuit, 
  Wrench, 
  BookOpen, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Cpu,
  FileCode2,
  FileJson,
  Atom,
  Server,
  Network,
  Layout,
  Palette,
  HardDrive,
  Table,
  Binary,
  BarChart3,
  MonitorPlay,
  GitBranch,
  TerminalSquare,
  Boxes,
  Component,
  ShieldCheck
} from 'lucide-react';

const iconMap = {
  Code: <Code size={20} color="#38bdf8" />,
  Cpu: <Cpu size={20} color="#38bdf8" />,
  FileCode2: <FileCode2 size={20} color="#38bdf8" />,
  FileJson: <FileJson size={20} color="#f59e0b" />,
  Brain: <BrainCircuit size={20} color="#10b981" />,
  BrainCircuit: <BrainCircuit size={20} color="#10b981" />,
  Database: <Database size={20} color="#6366f1" />,
  Atom: <Atom size={20} color="#38bdf8" />,
  Server: <Server size={20} color="#10b981" />,
  Network: <Network size={20} color="#8b5cf6" />,
  Layout: <Layout size={20} color="#f59e0b" />,
  Palette: <Palette size={20} color="#ec4899" />,
  HardDrive: <HardDrive size={20} color="#06b6d4" />,
  Layers: <Layers size={20} color="#10b981" />,
  Table: <Table size={20} color="#38bdf8" />,
  Binary: <Binary size={20} color="#6366f1" />,
  BarChart3: <BarChart3 size={20} color="#ec4899" />,
  MonitorPlay: <MonitorPlay size={20} color="#ef4444" />,
  BookOpen: <BookOpen size={20} color="#f59e0b" />,
  GitBranch: <GitBranch size={20} color="#f97316" />,
  Github: <GithubIcon size={20} color="#f8fafc" />,
  TerminalSquare: <TerminalSquare size={20} color="#38bdf8" />,
  Boxes: <Boxes size={20} color="#38bdf8" />,
  Component: <Component size={20} color="#8b5cf6" />,
  ShieldCheck: <ShieldCheck size={20} color="#10b981" />,
  Sparkles: <Sparkles size={20} color="#fbbf24" />,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills', icon: <Layers size={16} /> },
    { id: 'languages', label: 'Languages', icon: <Code size={16} /> },
    { id: 'webTech', label: 'Web & Frontend', icon: <Globe size={16} /> },
    { id: 'dataAndML', label: 'AI & Data Science', icon: <BrainCircuit size={16} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={16} /> },
    { id: 'tools', label: 'Developer Tools', icon: <Wrench size={16} /> },
    { id: 'coursework', label: 'CS Coursework', icon: <BookOpen size={16} /> },
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === 'all') {
      return [
        ...portfolioData.skills.languages.map(s => ({ ...s, category: 'Languages' })),
        ...portfolioData.skills.webTech.map(s => ({ ...s, category: 'Web' })),
        ...portfolioData.skills.dataAndML.map(s => ({ ...s, category: 'Data & ML' })),
        ...portfolioData.skills.databases.map(s => ({ ...s, category: 'Databases' })),
        ...portfolioData.skills.tools.map(s => ({ ...s, category: 'Tools' })),
      ];
    }
    if (activeTab === 'coursework') {
      return [];
    }
    return portfolioData.skills[activeTab]?.map(s => ({ ...s, category: activeTab })) || [];
  };

  const skillsList = getSkillsToDisplay();

  return (
    <section id="skills" className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, modern frameworks, data science libraries, and core computer science concepts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: activeTab === tab.id 
                  ? '1px solid #38bdf8' 
                  : '1px solid rgba(255, 255, 255, 0.08)',
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(99, 102, 241, 0.25))' 
                  : 'rgba(15, 23, 42, 0.6)',
                color: activeTab === tab.id ? '#38bdf8' : '#94a3b8',
                boxShadow: activeTab === tab.id ? '0 0 20px rgba(56, 189, 248, 0.25)' : 'none'
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        {activeTab !== 'coursework' && (
          <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
            {skillsList.map((skill, index) => (
              <div 
                key={index} 
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  padding: '1.4rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div 
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {iconMap[skill.icon] || <Code size={20} color="#38bdf8" />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f8fafc' }}>
                        {skill.name}
                      </div>
                      {skill.highlight && (
                        <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                          {skill.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Level Bar */}
                <div 
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #06b6d4, #6366f1)',
                      borderRadius: '4px',
                      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CS Coursework Section */}
        <div 
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <BookOpen size={22} color="#38bdf8" />
                <span>Core Computer Science Foundations</span>
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                Undergraduate coursework completed at Techno India University, Kolkata
              </p>
            </div>
            <span className="badge badge-emerald">B.Tech CSE (AI) Curriculum</span>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {portfolioData.skills.coursework.map((course, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '1.1rem',
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'flex-start',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div 
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {iconMap[course.icon] || <Code size={18} color="#38bdf8" />}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc', marginBottom: '0.2rem' }}>
                    {course.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>
                    {course.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
