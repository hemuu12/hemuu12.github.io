import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <footer className="futuristic-footer">
        <div className="footer-glow" />
        <div className="footer-border" />
        <div className="footer-content">
          <a href="#home" className="footer-logo">
            <span className="logo-bracket">{'{'}</span>
            <span className="logo-text">HSB</span>
            <span className="logo-bracket">{'}'}</span>
          </a>
          <div className="footer-center">
            <div className="footer-links">
              {resumeData.socialLinks && resumeData.socialLinks.map((item, index) => (
                <a href={item.url} key={index} target="_blank" rel="noopener noreferrer" className="footer-social-link" title={item.name}>
                  <i className={item.className} />
                </a>
              ))}
            </div>
            <span className="footer-copy">Designed & Built by {resumeData.name} &copy; {new Date().getFullYear()}</span>
          </div>
          <a href="#home" className="back-to-top" title="Back to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </a>
        </div>
      </footer>
    );
  }
}
