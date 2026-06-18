import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sending: false,
      sent: false,
      error: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    var state = this.state;

    if (!state.name.trim() || !state.email.trim() || !state.message.trim()) return;

    this.setState({ sending: true, error: false });

    emailjs.send(
      'service_6k5q6mj',
      'template_ifuxr5s',
      {
        from_name: state.name,
        from_email: state.email,
        message: state.message,
        to_name: this.props.resumeData.name,
      },
      'kQjJHcLpSeJIdD6FU'
    ).then(function() {
      self.setState({ sending: false, sent: true, name: '', email: '', message: '' });
      setTimeout(function() { self.setState({ sent: false }); }, 5000);
    }).catch(function() {
      self.setState({ sending: false, error: true });
      setTimeout(function() { self.setState({ error: false }); }, 5000);
    });
  }

  render() {
    const resumeData = this.props.resumeData;
    const state = this.state;

    return (
      <section id="contact" className="futuristic-section contact-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-number">05</span>
            <h2 className="section-title">
              <span className="title-accent">{"// "}</span>Contact
            </h2>
            <div className="section-line" />
          </div>

          <div className="contact-layout reveal">
            <div className="contact-left">
              <h3 className="contact-heading">
                Have a project in mind?<br/>
                <span className="gradient-text">Let's talk.</span>
              </h3>
              <p className="contact-desc">I'm always open to new opportunities, collaborations, or just a friendly conversation about tech.</p>

              <div className="contact-info-list">
                <a href={'mailto:' + (resumeData.email || '')} className="contact-info-item">
                  <div className="contact-info-icon email-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span>{resumeData.email}</span>
                </a>
                <a href={'tel:' + (resumeData.phone || '').replace(/[^+\d]/g, '')} className="contact-info-item">
                  <div className="contact-info-icon phone-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span>{resumeData.phone}</span>
                </a>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span>{resumeData.address}</span>
                </div>
              </div>

              <div className="contact-social-row">
                {resumeData.socialLinks && resumeData.socialLinks.map((item, index) => (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="contact-social-card glass-card" key={index}>
                    <i className={item.className} />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form glass-card" onSubmit={(e) => this.handleSubmit(e)}>
                <h4 className="form-title">Send me a message</h4>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                    rows="4"
                    value={state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="form-submit" disabled={state.sending}>
                  {state.sending ? (
                    <React.Fragment>
                      <span className="submit-spinner" />
                      Sending...
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </React.Fragment>
                  )}
                </button>
                {state.sent && (
                  <div className="form-status success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Message sent successfully!
                  </div>
                )}
                {state.error && (
                  <div className="form-status error">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    Failed to send. Please email directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
