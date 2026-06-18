import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="portfolio" className="futuristic-section portfolio-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-number">03</span>
            <h2 className="section-title">
              <span className="title-accent">{"// "}</span>Portfolio
            </h2>
            <div className="section-line" />
          </div>

          <div className="portfolio-list">
            {resumeData.portfolio && resumeData.portfolio.map((item, index) => (
              <div className={'portfolio-row reveal' + (index % 2 === 1 ? ' row-reverse' : '')} key={index}>
                <div className="portfolio-img-col">
                  <div className="portfolio-image-wrapper">
                    <div className="portfolio-image-placeholder">
                      <span className="placeholder-icon">{item.name.charAt(0)}</span>
                      <span className="placeholder-name">{item.name}</span>
                    </div>
                    <div className="portfolio-image-shine" />
                  </div>
                </div>
                <div className="portfolio-info-col">
                  <span className="portfolio-index">{'0' + (index + 1)}</span>
                  <h3 className="portfolio-name">{item.name}</h3>
                  <p className="portfolio-desc">{item.description}</p>
                  {item.techStack && (
                    <div className="portfolio-tech">
                      {item.techStack.split(', ').map((tech, i) => (
                        <span className="tech-tag" key={i}>{tech}</span>
                      ))}
                    </div>
                  )}
                  <div className="portfolio-links">
                    {item.liveUrl && (
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link live-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {item.githubUrl && (
                      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link github-link">
                        <i className="fa fa-github" />
                        Source Code
                      </a>
                    )}
                    {!item.liveUrl && !item.githubUrl && (
                      <span className="portfolio-link private-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        Private / Client Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
