import React, { Component } from 'react';

class AnimatedCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, started: false };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this._observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.state.started) {
          this.setState({ started: true });
          this.animate();
        }
      },
      { threshold: 0.5 }
    );
    if (this.ref.current) this._observer.observe(this.ref.current);
  }

  componentWillUnmount() {
    if (this._observer) this._observer.disconnect();
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  animate() {
    var target = this.props.target;
    var duration = this.props.duration || 2000;
    var start = performance.now();
    var self = this;

    function step(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      self.setState({ count: Math.floor(eased * target) });
      if (progress < 1) {
        self._raf = requestAnimationFrame(step);
      } else {
        self.setState({ count: target });
      }
    }
    this._raf = requestAnimationFrame(step);
  }

  render() {
    return (
      <span ref={this.ref} className="stat-number">
        {this.state.count}{this.props.suffix || ''}
      </span>
    );
  }
}

export default class About extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="about" className="futuristic-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-number">01</span>
            <h2 className="section-title">
              <span className="title-accent">{"// "}</span>About Me
            </h2>
            <div className="section-line" />
          </div>

          <div className="about-grid">
            <div className="about-left reveal reveal-left">
              <div className="about-image-wrapper">
                <div className="hex-frame">
                  <img className="about-profile-pic" src="images/profilepic.jpg" alt="Hari Singh Bisht" />
                </div>
                <div className="about-image-glow" />
                <div className="about-image-ring" />
              </div>

              <div className="about-stats">
                <div className="stat-item">
                  <AnimatedCounter target={3} suffix="+" duration={1500} />
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <AnimatedCounter target={6} suffix="+" duration={1500} />
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <AnimatedCounter target={20} suffix="+" duration={2000} />
                  <span className="stat-label">Tech Stack</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <AnimatedCounter target={49} duration={2500} />
                  <span className="stat-label">APIs</span>
                </div>
              </div>
            </div>

            <div className="about-content reveal reveal-right">
              <h3 className="about-headline">
                Crafting <span className="gradient-text">Scalable</span> Digital Experiences
              </h3>
              <p className="about-text">{resumeData.aboutme}</p>

              <div className="about-info-grid">
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <span className="info-label">Name</span>
                    <span className="info-value">{resumeData.name}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <span className="info-label">Location</span>
                    <span className="info-value">{resumeData.address}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <span className="info-label">Email</span>
                    <span className="info-value">{resumeData.email}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <span className="info-label">Phone</span>
                    <span className="info-value">{resumeData.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
