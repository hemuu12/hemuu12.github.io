import React, { Component } from 'react';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false, menuOpen: false, typedText: '', showCursor: true };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.initParticles();
    this.startTypewriter();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    if (this.typeTimer) clearTimeout(this.typeTimer);
    if (this.cursorTimer) clearInterval(this.cursorTimer);
  }

  handleScroll() {
    const scrolled = window.scrollY > 50;
    if (this.state.scrolled !== scrolled) this.setState({ scrolled });

    document.querySelectorAll('ul.nav-links li a').forEach(link => {
      link.classList.remove('nav-active');
    });
    const sections = ['contact', 'testimonials', 'portfolio', 'resume', 'about', 'home'];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) {
        const activeLink = document.querySelector('ul.nav-links li a[href="#' + id + '"]');
        if (activeLink) activeLink.classList.add('nav-active');
        break;
      }
    }
  }

  startTypewriter() {
    const roles = this.props.resumeData.role.split('');
    let i = 0;
    const type = () => {
      if (i <= roles.length) {
        this.setState({ typedText: roles.slice(0, i).join('') });
        i++;
        this.typeTimer = setTimeout(type, 80);
      }
    };
    setTimeout(type, 1200);
    this.cursorTimer = setInterval(() => {
      this.setState(prev => ({ showCursor: !prev.showCursor }));
    }, 530);
  }

  initParticles() {
    const canvas = this.canvasRef;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    canvas.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.15
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        var color = i % 3 === 0 ? '168, 85, 247' : i % 3 === 1 ? '0, 240, 255' : '236, 72, 153';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + color + ', ' + p.opacity + ')';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            var lineColor = i % 2 === 0 ? '168, 85, 247' : '0, 240, 255';
            ctx.strokeStyle = 'rgba(' + lineColor + ', ' + (0.05 * (1 - d / 140)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      this.animFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  render() {
    const resumeData = this.props.resumeData;
    const { scrolled, menuOpen, typedText, showCursor } = this.state;
    return (
      <React.Fragment>
        <header id="home" className="futuristic-header">
          <canvas ref={el => { this.canvasRef = el; }} className="particle-canvas" />
          <div className="header-overlay" />
          <div className="header-grid-bg" />

          <nav className={'futuristic-nav' + (scrolled ? ' nav-scrolled' : '')}>
            <a href="#home" className="nav-logo">
              <span className="logo-bracket">{'{'}</span>
              <span className="logo-text">HSB</span>
              <span className="logo-bracket">{'}'}</span>
            </a>
            <button
              className={'mobile-menu-btn' + (menuOpen ? ' open' : '')}
              onClick={() => this.setState({ menuOpen: !menuOpen })}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
            <ul className={'nav-links' + (menuOpen ? ' nav-open' : '')}>
              {['home', 'about', 'resume', 'portfolio', 'testimonials', 'contact'].map(id => (
                <li key={id}>
                  <a href={'#' + id} onClick={() => this.setState({ menuOpen: false })}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <div className="glitch-wrapper">
              <h1 className="hero-title glitch" data-text={resumeData.name}>
                {resumeData.name}
              </h1>
            </div>
            <div className="hero-role">
              <span className="role-line" />
              <span className="role-text">
                {typedText}
                <span className={'type-cursor' + (showCursor ? '' : ' cursor-hidden')}>|</span>
              </span>
              <span className="role-line" />
            </div>
            <p className="hero-desc">{resumeData.roleDescription}</p>
            <div className="hero-buttons">
              {resumeData.resumeDownload && (
                <a href={resumeData.resumeDownload} download className="hero-btn primary-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download CV
                </a>
              )}
              <a href="#contact" className="hero-btn secondary-btn">Get In Touch</a>
            </div>
            <ul className="hero-social">
              {resumeData.socialLinks && resumeData.socialLinks.map(item => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="social-link-btn" title={item.name}>
                    <i className={item.className} />
                  </a>
                </li>
              ))}
            </ul>
            <a href="#about" className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-wheel" />
              </div>
              <span className="scroll-text">Scroll</span>
            </a>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
