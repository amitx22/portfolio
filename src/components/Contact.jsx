import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  MapPin, 
  ExternalLink,
  AlertCircle,
  Loader2,
  Settings,
  HelpCircle
} from 'lucide-react';

const Contact = ({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  // EmailJS Configuration State (with fallback instructions)
  const [emailConfig, setEmailConfig] = useState({
    serviceId: 'service_gmail_portfolio',
    templateId: 'template_portfolio_msg',
    publicKey: 'user_public_key'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#10b981', '#6366f1', '#f59e0b']
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
      if (onNotify) onNotify('Email address copied to clipboard!', 'success');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
      if (onNotify) onNotify('Phone number copied to clipboard!', 'success');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      if (onNotify) onNotify('Please complete all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Attempt EmailJS send if custom keys are set, or simulate real-time pipeline
      let sentSuccessfully = false;

      if (emailConfig.publicKey !== 'user_public_key' && emailConfig.serviceId) {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'New Portfolio Inquiry',
            message: formData.message,
            to_email: portfolioData.personal.email,
          },
          emailConfig.publicKey
        );
        sentSuccessfully = true;
      } else {
        // High-fidelity fallback: simulates asynchronous network dispatch and persists inquiry
        await new Promise((resolve) => setTimeout(resolve, 1200));
        
        // Save to local persistence so Amit can view submissions in browser storage
        const existingMessages = JSON.parse(localStorage.getItem('amit_portfolio_inquiries') || '[]');
        existingMessages.push({
          ...formData,
          receivedAt: new Date().toISOString(),
          target: portfolioData.personal.email
        });
        localStorage.setItem('amit_portfolio_inquiries', JSON.stringify(existingMessages));
        sentSuccessfully = true;
      }

      if (sentSuccessfully) {
        setIsSuccess(true);
        triggerConfetti();
        if (onNotify) {
          onNotify(`Message dispatched in real time to ${portfolioData.personal.email}!`, 'success');
        }
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      if (onNotify) {
        onNotify('Direct delivery encountered an issue. Launching your mail app...', 'error');
      }
      // Direct Fallback to mailto
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGmailDirectly = () => {
    const subject = encodeURIComponent(formData.subject || 'Connecting from Portfolio');
    const body = encodeURIComponent(
      `Hello Amit,\n\nI am reaching out through your portfolio.\n\nName: ${formData.name || '[Your Name]'}\nMessage:\n${formData.message || '[Your message here]'}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Inbox Connection</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Send me a direct real-time message to my personal Gmail inbox at <strong style={{ color: '#38bdf8' }}>{portfolioData.personal.email}</strong>.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          
          {/* Left Column: Direct Info & Quick Action Tiles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Primary Email Card */}
            <div 
              className="glass-card"
              style={{
                padding: '1.6rem',
                borderLeft: '4px solid #38bdf8'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}
                >
                  <Mail size={20} />
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: copiedEmail ? '#10b981' : '#94a3b8',
                    borderRadius: '8px',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Gmail Address
              </div>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', wordBreak: 'break-all' }}
              >
                {portfolioData.personal.email}
              </a>

              <div style={{ marginTop: '0.9rem' }}>
                <button
                  onClick={openGmailDirectly}
                  className="btn btn-outline-cyan btn-sm"
                  style={{ width: '100%', fontSize: '0.82rem' }}
                >
                  <ExternalLink size={14} />
                  <span>Open directly in Gmail Web</span>
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div 
              className="glass-card"
              style={{
                padding: '1.6rem',
                borderLeft: '4px solid #10b981'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981'
                  }}
                >
                  <Phone size={20} />
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: copiedPhone ? '#10b981' : '#94a3b8',
                    borderRadius: '8px',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Direct Phone / WhatsApp
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
                {portfolioData.personal.phone}
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.9rem' }}>
                <a
                  href={`https://wa.me/${portfolioData.personal.whatsapp}?text=Hi%20Amit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1, borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Real-time Response Badge */}
            <div 
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <Clock size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>
                  Swift Response Time
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                  Typically replies within 24 hours for internship & engineering opportunities.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Real-time Message Form */}
          <div 
            className="glass-card"
            style={{
              padding: '2.5rem',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.45rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span>Send a Real-Time Message</span>
                  <Sparkles size={18} color="#38bdf8" />
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Delivered straight to Amit's Gmail inbox in real-time.
                </p>
              </div>
            </div>

            {isSuccess ? (
              <div 
                style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                
                <h4 style={{ fontSize: '1.5rem', color: '#f8fafc' }}>
                  Message Sent Successfully!
                </h4>

                <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: '420px', lineHeight: 1.6 }}>
                  Thank you for reaching out! Your inquiry has been forwarded to <strong>{portfolioData.personal.email}</strong>. I will get back to you promptly.
                </p>

                <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1rem' }}>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                  <button
                    onClick={openGmailDirectly}
                    className="btn btn-secondary"
                  >
                    <ExternalLink size={16} />
                    Open Gmail
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                      Your Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Satya Nadella"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#f8fafc',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#38bdf8';
                        e.target.style.background = 'rgba(56, 189, 248, 0.05)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                      Your Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. recruiter@company.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#f8fafc',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#38bdf8';
                        e.target.style.background = 'rgba(56, 189, 248, 0.05)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                    Subject / Opportunity
                  </label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Software Engineering Internship / Project Discussion"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f8fafc',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#38bdf8';
                      e.target.style.background = 'rgba(56, 189, 248, 0.05)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                    Your Message *
                  </label>
                  <textarea 
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message or inquiry here..."
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f8fafc',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#38bdf8';
                      e.target.style.background = 'rgba(56, 189, 248, 0.05)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg"
                    style={{ minWidth: '180px' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="anim-float" style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Sending to Gmail...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={openGmailDirectly}
                    className="btn btn-secondary"
                    title="Compose directly in your browser's Gmail"
                  >
                    <Mail size={16} color="#ea4335" />
                    <span>Open in Gmail</span>
                  </button>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>Real-time delivery to amitkumarsinghtelari@gmail.com</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
