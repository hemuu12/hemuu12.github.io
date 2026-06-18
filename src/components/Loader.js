import React, { Component } from 'react';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0, hiding: false, hidden: false };
  }

  componentDidMount() {
    var self = this;
    var start = performance.now();
    var duration = 2000;

    function tick(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      self.setState({ progress: Math.floor(eased * 100) });
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        self.setState({ hiding: true });
        setTimeout(function() {
          self.setState({ hidden: true });
          if (self.props.onFinish) self.props.onFinish();
        }, 600);
      }
    }
    requestAnimationFrame(tick);
  }

  render() {
    if (this.state.hidden) return null;

    return (
      <div className={'loader-screen' + (this.state.hiding ? ' loader-exit' : '')}>
        <div className="loader-content">
          <div className="loader-logo">
            <span className="loader-bracket">{'{'}</span>
            <span className="loader-text">HSB</span>
            <span className="loader-bracket">{'}'}</span>
          </div>
          <div className="loader-bar-track">
            <div className="loader-bar-fill" style={{ width: this.state.progress + '%' }} />
          </div>
          <div className="loader-info">
            <span className="loader-percent">{this.state.progress}%</span>
            <span className="loader-label">Loading Portfolio</span>
          </div>
        </div>
        <div className="loader-grid" />
      </div>
    );
  }
}
