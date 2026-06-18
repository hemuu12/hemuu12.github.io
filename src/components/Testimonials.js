import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="testimonials" className="futuristic-section testimonials-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-number">04</span>
            <h2 className="section-title">
              <span className="title-accent">{"// "}</span>Testimonials
            </h2>
            <div className="section-line" />
          </div>

          <div className="testimonials-grid">
            {resumeData.testimonials && resumeData.testimonials.map((item, index) => (
              <div className="testimonial-card glass-card reveal" key={index}>
                <div className="testimonial-top-bar" />
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
                  </svg>
                </div>
                <blockquote className="testimonial-text">"{item.description}"</blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{item.name.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <cite className="author-name">{item.name}</cite>
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
