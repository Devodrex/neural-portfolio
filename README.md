# Neural-Link Portfolio — Aditya Kumar Singh

A high-performance dark-mode portfolio with a cyberpunk "Neural-Link" aesthetic built with React, Tailwind CSS, and Framer Motion.

## Features

- **Neural-Link Hero**: Interactive SVG Bezier string animations anchored to the profile photo, connecting floating skill nodes that rubber-band on mouse movement
- **HUD Overlay**: Real-time system stats ticker, holographic scan lines, orbit rings
- **Classified Dossiers**: Project cards styled as classified intelligence files with scan-line animations
- **Terminal Log**: Experience section rendered as a typewriter terminal output
- **Skills Matrix**: Animated proficiency bars with neon glow effects
- **Custom Cursor**: Dual-layer smooth cursor with hover states
- **Floating Side Dock**: Glowing neon icon dock for LinkedIn, GitHub, Email
- **CV Download**: Glitch effect on hover, direct PDF download
- **Scroll-scale Hero Image**: GSAP-style image zoom on scroll (via Framer Motion)

## Tech Stack

- **React 18** — Component framework
- **Tailwind CSS** — Utility-first styling with custom cyber theme
- **Framer Motion** — Animations and scroll-triggered effects
- **Font Awesome** — Icons
- **Google Fonts** — Syne, DM Sans, JetBrains Mono

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/repo-name"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

### Vercel / Netlify
Connect your GitHub repo — both platforms auto-detect Create React App and deploy on push.

## Customization

- **Profile image**: Replace `public/profile.png`
- **CV**: Replace `public/Aditya_CV.pdf`
- **Social links**: Edit `src/components/Nav.jsx` — `DOCK_LINKS` array
- **Colors**: Edit `tailwind.config.js` under `theme.extend.colors`
- **Skills**: Edit `src/components/Skills.jsx` — `SKILL_GROUPS` array
- **Projects**: Edit `src/components/Projects.jsx` — `PROJECTS` array

## Structure

```
src/
├── components/
│   ├── Nav.jsx         # Top nav + floating side dock
│   ├── Hero.jsx        # Neural-Link hero with string animations
│   ├── Projects.jsx    # Classified dossier cards
│   ├── Experience.jsx  # Terminal log
│   ├── Skills.jsx      # Skills matrix with bars
│   ├── Research.jsx    # Published research section
│   ├── Contact.jsx     # Contact info + status panel
│   ├── Footer.jsx      # Footer
│   └── CustomCursor.jsx # Custom dual-layer cursor
├── App.jsx
├── index.js
└── index.css           # Global styles + keyframes
public/
├── profile.png         # Your profile photo
└── Aditya_CV.pdf       # Your resume
```

---
Built by Aditya Kumar Singh — ML Engineer & Researcher
