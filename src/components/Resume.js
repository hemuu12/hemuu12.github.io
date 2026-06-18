import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="resume" className="futuristic-section resume-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-number">02</span>
            <h2 className="section-title">
              <span className="title-accent">{"// "}</span>Resume
            </h2>
            <div className="section-line" />
            {resumeData.resumeDownload && (
              <a href={resumeData.resumeDownload} download className="resume-download-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            )}
          </div>

          <div className="resume-grid">
            <div className="resume-column reveal reveal-left">
              <div className="category-header">
                <div className="category-icon cat-icon-work">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3 className="category-title">Experience</h3>
              </div>
              <div className="timeline">
                {resumeData.work && resumeData.work.map((item, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot">
                      <div className="timeline-dot-ping" />
                    </div>
                    <div className="timeline-card glass-card">
                      <div className="timeline-card-top">
                        <h4 className="timeline-title">{item.CompanyName}</h4>
                        {index === 0 && <span className="current-badge">Current</span>}
                      </div>
                      <span className="timeline-subtitle">{item.specialization}</span>
                      <span className="timeline-date">
                        {item.startDate ? item.startDate + ' — ' : ''}{item.MonthOfLeaving} {item.YearOfLeaving}
                      </span>
                      <p className="timeline-desc">{item.Achievements}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="resume-column reveal reveal-right">
              <div className="category-header">
                <div className="category-icon cat-icon-edu">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                </div>
                <h3 className="category-title">Education</h3>
              </div>
              <div className="timeline">
                {resumeData.education && resumeData.education.map((item, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot" />
                    <div className="timeline-card glass-card">
                      <h4 className="timeline-title">{item.UniversityName}</h4>
                      <span className="timeline-subtitle">{item.specialization}</span>
                      <span className="timeline-date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </span>
                      <p className="timeline-desc">{item.Achievements}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-section reveal">
            <div className="category-header">
              <div className="category-icon cat-icon-skills">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3 className="category-title">Technical Skills</h3>
            </div>
            <div className="skills-grid">
              {resumeData.skills && resumeData.skills.map((item, index) => (
                <div className={'skill-chip skill-' + (item.category || 'default')} key={index} style={{animationDelay: (index * 0.05) + 's'}}>
                  <span className="skill-pulse" />
                  <span className="skill-name">{item.skillname}</span>
                </div>
              ))}
            </div>
            {resumeData.softSkills && (
              <div className="soft-skills-section">
                <h4 className="soft-skills-title">Soft Skills</h4>
                <div className="soft-skills-grid">
                  {resumeData.softSkills.map((skill, index) => (
                    <span className="soft-skill-tag" key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
