# Hari Singh Bisht — Portfolio

Personal portfolio website built with React, showcasing my work as a Full Stack Developer.

**Live:** [hemuu12.github.io](https://hemuu12.github.io)

## Features

- Interactive loading animation with cursor trail effects
- Scroll-reveal animations using Intersection Observer
- Sections: About, Resume, Portfolio, Testimonials, Contact
- AI Chat widget
- Contact form powered by EmailJS
- Responsive design
- Resume PDF download

## Tech Stack

- React 16
- EmailJS for contact form
- Font Awesome icons
- CSS (custom layout + default themes)
- GitHub Actions for deployment to GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Project Structure

```
src/
├── App.js              # Main app with loader + scroll reveal
├── resumeData.js       # All portfolio content (editable)
├── components/
│   ├── Header.js       # Hero section with social links
│   ├── About.js        # Bio and profile
│   ├── Resume.js       # Education, work experience, skills
│   ├── Portfolio.js    # Project showcase
│   ├── Testimonials.js # Recommendations
│   ├── ContactUs.js    # Contact form (EmailJS)
│   ├── Footer.js       # Footer with social links
│   ├── AiChat.js       # AI chat widget
│   ├── Loader.js       # Loading animation
│   └── CursorTrail.js  # Cursor trail effect
public/
├── Hari_Bisht_Resume.pdf
├── images/
└── css/
```

## Customization

All portfolio content (bio, experience, education, projects, skills, testimonials) is centralized in `src/resumeData.js`. Edit that file to update the site content.

## Deployment

Pushes to `master` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages.

## Contact

- **Email:** harisingh.bisht2001@gmail.com
- **LinkedIn:** [hari-singh-bisht](https://www.linkedin.com/in/hari-singh-bisht/)
- **GitHub:** [hemuu12](https://github.com/hemuu12)
