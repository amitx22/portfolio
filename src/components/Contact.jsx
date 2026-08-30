import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
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
  ExternalLink,
  Loader2
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

  // ==========================================
  // WEB3FORMS ACCESS KEY
  // ==========================================
  const WEB3FORMS_ACCESS_KEY =
    '8e46d744-8142-43df-8258-f1410d8fb4c1';

  // ==========================================
  // INPUT CHANGE
  // ==========================================
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ==========================================
  // CONFETTI
  // ==========================================
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#10b981', '#6366f1', '#f59e0b']
      });
    } catch (error) {
      console.log('Confetti error:', error);
    }
  };

  // ==========================================
  // COPY EMAIL / PHONE
  // ==========================================
  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);

      if (type === 'email') {
        setCopiedEmail(true);

        setTimeout(() => {
          setCopiedEmail(false);
        }, 2500);

        if (onNotify) {
          onNotify(
            'Email address copied to clipboard!',
            'success'
          );
        }
      } else {
        setCopiedPhone(true);

        setTimeout(() => {
          setCopiedPhone(false);
        }, 2500);

        if (onNotify) {
          onNotify(
            'Phone number copied to clipboard!',
            'success'
          );
        }
      }
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  // ==========================================
  // WEB3FORMS SUBMIT
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      if (onNotify) {
        onNotify(
          'Please complete all required fields.',
          'error'
        );
      }

      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data
      const web3FormData = new FormData();

      // Web3Forms Access Key
      web3FormData.append(
        'access_key',
        WEB3FORMS_ACCESS_KEY
      );

      // User details
      web3FormData.append(
        'name',
        formData.name.trim()
      );

      web3FormData.append(
        'email',
        formData.email.trim()
      );

      // Subject
      web3FormData.append(
        'subject',
        formData.subject.trim() ||
        'New Portfolio Inquiry'
      );

      // Message
      web3FormData.append(
        'message',
        formData.message.trim()
      );

      // Sender name
      web3FormData.append(
        'from_name',
        'Amit Portfolio'
      );

      // Optional reply-to email
      web3FormData.append(
        'replyto',
        formData.email.trim()
      );

      // ==========================================
      // SEND TO WEB3FORMS
      // ==========================================
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: web3FormData
        }
      );

      const result = await response.json();

      console.log('Web3Forms Response:', result);

      // ==========================================
      // SUCCESS
      // ==========================================
      if (response.ok && result.success) {
        setIsSuccess(true);

        triggerConfetti();

        if (onNotify) {
          onNotify(
            'Message sent successfully! Check your Gmail.',
            'success'
          );
        }

        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error(
          'Web3Forms Error:',
          result
        );

        if (onNotify) {
          onNotify(
            result.message ||
            'Message could not be sent.',
            'error'
          );
        }
      }
    } catch (error) {
      console.error(
        'Web3Forms Error:',
        error
      );

      if (onNotify) {
        onNotify(
          'Something went wrong! Please try again.',
          'error'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // OPEN GMAIL
  // ==========================================
  const openGmailDirectly = () => {
    const subject = encodeURIComponent(
      formData.subject ||
      'Connecting from Portfolio'
    );

    const body = encodeURIComponent(
      `Hello Amit,

I am reaching out through your portfolio.

Name: ${formData.name || '[Your Name]'
      }

Email: ${formData.email || '[Your Email]'
      }

Message:
${formData.message ||
      '[Your message here]'
      }`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${portfolioData.personal.email}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(
      gmailUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contact"
      className="section"
      style={{
        position: 'relative'
      }}
    >
      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="section-header">

          <div className="section-tag">
            <Mail size={14} />

            <span>
              Direct Inbox Connection
            </span>
          </div>

          <h2 className="section-title">
            Let's Build Something{' '}

            <span className="gradient-text">
              Exceptional
            </span>
          </h2>

          <p className="section-subtitle">
            Send me a direct message to my
            personal Gmail inbox at{' '}

            <strong
              style={{
                color: '#38bdf8'
              }}
            >
              {portfolioData.personal.email}
            </strong>.
          </p>

        </div>

        {/* ================= CONTACT GRID ================= */}

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >

          {/* ================= LEFT ================= */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >

            {/* ================= EMAIL CARD ================= */}

            <div
              className="glass-card"
              style={{
                padding: '1.6rem',
                borderLeft: '4px solid #38bdf8'
              }}
            >

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.8rem'
                }}
              >

                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background:
                      'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}
                >
                  <Mail size={20} />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      portfolioData.personal.email,
                      'email'
                    )
                  }
                  style={{
                    background:
                      'rgba(255,255,255,0.05)',
                    border:
                      '1px solid rgba(255,255,255,0.1)',
                    color: copiedEmail
                      ? '#10b981'
                      : '#94a3b8',
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
                  {copiedEmail ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}

                  <span>
                    {copiedEmail
                      ? 'Copied!'
                      : 'Copy'}
                  </span>
                </button>

              </div>

              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#64748b',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                Gmail Address
              </div>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  wordBreak: 'break-all'
                }}
              >
                {portfolioData.personal.email}
              </a>

              <div
                style={{
                  marginTop: '0.9rem'
                }}
              >
                <button
                  type="button"
                  onClick={openGmailDirectly}
                  className="btn btn-outline-cyan btn-sm"
                  style={{
                    width: '100%',
                    fontSize: '0.82rem'
                  }}
                >
                  <ExternalLink size={14} />

                  <span>
                    Open directly in Gmail Web
                  </span>
                </button>
              </div>

            </div>

            {/* ================= PHONE CARD ================= */}

            <div
              className="glass-card"
              style={{
                padding: '1.6rem',
                borderLeft: '4px solid #10b981'
              }}
            >

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.8rem'
                }}
              >

                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background:
                      'rgba(16,185,129,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981'
                  }}
                >
                  <Phone size={20} />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      portfolioData.personal.phone,
                      'phone'
                    )
                  }
                  style={{
                    background:
                      'rgba(255,255,255,0.05)',
                    border:
                      '1px solid rgba(255,255,255,0.1)',
                    color: copiedPhone
                      ? '#10b981'
                      : '#94a3b8',
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
                  {copiedPhone ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}

                  <span>
                    {copiedPhone
                      ? 'Copied!'
                      : 'Copy'}
                  </span>
                </button>

              </div>

              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#64748b',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                Direct Phone / WhatsApp
              </div>

              <div
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {portfolioData.personal.phone}
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  marginTop: '0.9rem'
                }}
              >

                <a
                  href={`https://wa.me/${portfolioData.personal.whatsapp}?text=Hi%20Amit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{
                    flex: 1,
                    borderColor:
                      'rgba(16,185,129,0.3)',
                    color: '#34d399'
                  }}
                >
                  <MessageSquare size={14} />

                  <span>
                    WhatsApp
                  </span>
                </a>

                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="btn btn-secondary btn-sm"
                  style={{
                    flex: 1
                  }}
                >
                  <Phone size={14} />

                  <span>
                    Call Now
                  </span>
                </a>

              </div>

            </div>

            {/* ================= RESPONSE TIME ================= */}

            <div
              style={{
                background:
                  'rgba(15,23,42,0.6)',
                border:
                  '1px solid rgba(255,255,255,0.08)',
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
                  background:
                    'rgba(56,189,248,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <Clock size={18} />
              </div>

              <div>

                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#f8fafc'
                  }}
                >
                  Swift Response Time
                </div>

                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#94a3b8'
                  }}
                >
                  Typically replies within
                  24 hours for internship &
                  engineering opportunities.
                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              position: 'relative'
            }}
          >

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.75rem'
              }}
            >

              <div>

                <h3
                  style={{
                    fontSize: '1.45rem',
                    color: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <span>
                    Send a Message
                  </span>

                  <Sparkles
                    size={18}
                    color="#38bdf8"
                  />
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8'
                  }}
                >
                  Delivered straight to
                  Amit's Gmail inbox.
                </p>

              </div>

            </div>

            {/* ================= SUCCESS ================= */}

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
                    background:
                      'rgba(16,185,129,0.15)',
                    border: '2px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    boxShadow:
                      '0 0 30px rgba(16,185,129,0.3)'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h4
                  style={{
                    fontSize: '1.5rem',
                    color: '#f8fafc'
                  }}
                >
                  Message Sent Successfully!
                </h4>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#94a3b8',
                    maxWidth: '420px',
                    lineHeight: 1.6
                  }}
                >
                  Thank you for reaching out!
                  Your message has been sent to{' '}

                  <strong>
                    {portfolioData.personal.email}
                  </strong>.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '0.8rem',
                    marginTop: '1rem'
                  }}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setIsSuccess(false)
                    }
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>

                  <button
                    type="button"
                    onClick={openGmailDirectly}
                    className="btn btn-secondary"
                  >
                    <ExternalLink size={16} />
                    Open Gmail
                  </button>

                </div>

              </div>

            ) : (

              /* ================= FORM ================= */

              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >

                {/* NAME + EMAIL */}

                <div
                  className="form-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem'
                  }}
                >

                  <div>

                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        color: '#cbd5e1',
                        fontWeight: 600,
                        marginBottom: '0.45rem',
                        fontFamily:
                          'var(--font-mono)'
                      }}
                    >
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
                        background:
                          'rgba(255,255,255,0.04)',
                        border:
                          '1px solid rgba(255,255,255,0.1)',
                        color: '#f8fafc',
                        fontSize: '0.95rem',
                        fontFamily:
                          'var(--font-body)',
                        outline: 'none'
                      }}
                    />

                  </div>

                  <div>

                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        color: '#cbd5e1',
                        fontWeight: 600,
                        marginBottom: '0.45rem',
                        fontFamily:
                          'var(--font-mono)'
                      }}
                    >
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
                        background:
                          'rgba(255,255,255,0.04)',
                        border:
                          '1px solid rgba(255,255,255,0.1)',
                        color: '#f8fafc',
                        fontSize: '0.95rem',
                        fontFamily:
                          'var(--font-body)',
                        outline: 'none'
                      }}
                    />

                  </div>

                </div>

                {/* SUBJECT */}

                <div>

                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      color: '#cbd5e1',
                      fontWeight: 600,
                      marginBottom: '0.45rem',
                      fontFamily:
                        'var(--font-mono)'
                    }}
                  >
                    Subject / Opportunity
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Software Engineering Internship"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background:
                        'rgba(255,255,255,0.04)',
                      border:
                        '1px solid rgba(255,255,255,0.1)',
                      color: '#f8fafc',
                      fontSize: '0.95rem',
                      fontFamily:
                        'var(--font-body)',
                      outline: 'none'
                    }}
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      color: '#cbd5e1',
                      fontWeight: 600,
                      marginBottom: '0.45rem',
                      fontFamily:
                        'var(--font-mono)'
                    }}
                  >
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
                      background:
                        'rgba(255,255,255,0.04)',
                      border:
                        '1px solid rgba(255,255,255,0.1)',
                      color: '#f8fafc',
                      fontSize: '0.95rem',
                      fontFamily:
                        'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />

                </div>

                {/* BUTTONS */}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg"
                    style={{
                      minWidth: '180px'
                    }}
                  >

                    {isSubmitting ? (
                      <>
                        <Loader2
                          size={18}
                          style={{
                            animation:
                              'spin 1s linear infinite'
                          }}
                        />

                        <span>
                          Sending Message...
                        </span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />

                        <span>
                          Send Message
                        </span>
                      </>
                    )}

                  </button>

                  <button
                    type="button"
                    onClick={openGmailDirectly}
                    className="btn btn-secondary"
                    title="Compose directly in Gmail"
                  >
                    <Mail
                      size={16}
                      color="#ea4335"
                    />

                    <span>
                      Open in Gmail
                    </span>
                  </button>

                </div>

                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <CheckCircle2
                    size={14}
                    color="#10b981"
                  />

                  <span>
                    Messages delivered to{' '}
                    {portfolioData.personal.email}
                  </span>
                </div>

              </form>

            )}

          </div>

        </div>

      </div>

      {/* ================= RESPONSIVE CSS ================= */}

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }

          .form-row {
            grid-template-columns: 1fr !important;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

    </section>
  );
};

export default Contact;
