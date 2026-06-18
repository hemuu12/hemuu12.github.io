import React, { Component } from 'react';
import Loader from './components/Loader';
import CursorTrail from './components/CursorTrail';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import resumeData from './resumeData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    this._observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    if (this.state.loaded) this.observeReveals();
  }

  componentDidUpdate(_, prevState) {
    if (!prevState.loaded && this.state.loaded) {
      this.observeReveals();
    }
  }

  observeReveals() {
    var observer = this._observer;
    setTimeout(function() {
      document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
      });
    }, 100);
  }

  componentWillUnmount() {
    if (this._observer) this._observer.disconnect();
  }

  render() {
    return (
      <div className="App">
        <CursorTrail />
        <Loader onFinish={() => this.setState({ loaded: true })} />
        {this.state.loaded && (
          <React.Fragment>
            <Header resumeData={resumeData} />
            <About resumeData={resumeData} />
            <Resume resumeData={resumeData} />
            <Portfolio resumeData={resumeData} />
            <Testimonials resumeData={resumeData} />
            <ContactUs resumeData={resumeData} />
            <Footer resumeData={resumeData} />
            <AiChat />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
