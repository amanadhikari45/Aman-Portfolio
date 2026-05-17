<div align="center">

# Aman Adhikari — Portfolio

**ML Engineer · Data Scientist · Full-Stack Developer**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-aman--adhikari.netlify.app-4f9cff?style=for-the-badge)](https://aman-adhikari.netlify.app)
[![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00c7b7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)
[![License](https://img.shields.io/badge/License-MIT-a78bfa?style=for-the-badge)](LICENSE)

*Building end-to-end AI/ML systems — medical image diagnostics, government analytics, and intelligent applications.*

</div>

---

## 🖥️ Preview

> **Live:** [https://aman-adhikari.netlify.app](https://aman-adhikari.netlify.app)

A dark-mode, fully responsive personal portfolio built with **React 18** and **CSS Modules** — no UI library, no template. Every component hand-crafted with custom hooks, CSS variables, and Intersection Observer animations.

---

## ⚡ Features

| Feature | Details |
|---|---|
| 🎨 **Design** | Dark-mode with animated gradient accents (blue → violet → teal) |
| 📱 **Responsive** | Mobile, tablet, and desktop — fluid grid layouts throughout |
| 🖱️ **Custom Cursor** | Animated dot + ring cursor with hover expansion (desktop) |
| 📊 **Scroll Progress** | Fixed gradient progress bar tracking scroll position |
| 🔭 **Fade Animations** | Intersection Observer–powered section fade-ins on scroll |
| 🧠 **Skills Grid** | Categorized tech pills with brand-colored icons |
| 💼 **Timeline Experience** | Vertical timeline with role cards and achievement bullets |
| 🏗️ **Project Showcase** | Architecture diagrams, stack tags, GitHub links per project |
| 🎓 **Education Section** | Coursework highlights, CPT status, degree details |
| 📬 **Contact Section** | Direct links to email, LinkedIn, and GitHub |
| ♿ **Accessible** | Semantic HTML, ARIA roles, keyboard-navigable |
| 🚀 **Auto-Deploy** | GitHub → Netlify CI/CD on every push to main |

---

## 🛠️ Tech Stack

```
React 18          →  Component architecture, hooks, JSX
CSS Modules       →  Scoped styles, zero class conflicts
CSS Variables     →  Design tokens (colors, spacing, fonts)
Font Awesome 6    →  Icon library
JetBrains Mono    →  Monospace font (labels, tags, code)
Plus Jakarta Sans →  Primary display font
Netlify           →  Hosting + CI/CD
```

No Redux. No UI framework. No styled-components. Just React, CSS, and clean architecture.

---

## 📁 Project Structure

```
aman-portfolio/
│
├── public/
│   └── index.html                     # SEO meta, OG tags, font imports
│
├── src/
│   ├── components/                    # Reusable UI components
│   │   ├── Cursor/
│   │   │   ├── Cursor.jsx             # Animated dot + ring cursor
│   │   │   └── Cursor.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx             # Site footer with socials
│   │   │   └── Footer.module.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx             # Fixed nav with scroll detection
│   │   │   └── Navbar.module.css
│   │   ├── ScrollBar/
│   │   │   ├── ScrollBar.jsx          # Gradient scroll progress bar
│   │   │   └── ScrollBar.module.css
│   │   └── SectionHeader/
│   │       ├── SectionHeader.jsx      # Reusable tag + heading combo
│   │       └── SectionHeader.module.css
│   │
│   ├── sections/                      # Full-page sections
│   │   ├── Hero/                      # Landing, stats, photo, CTAs
│   │   ├── About/                     # Bio, info cards, photo
│   │   ├── Skills/                    # Categorized tech pills
│   │   ├── Projects/                  # Cards with architecture + links
│   │   ├── Experience/                # Timeline layout
│   │   ├── Education/                 # Degree cards with coursework
│   │   └── Contact/                   # Email, LinkedIn, GitHub CTAs
│   │
│   ├── data/                          # All content as JS data files
│   │   ├── skills.js                  # Skill categories + icons
│   │   ├── projects.js                # Project details, stack, links
│   │   ├── experience.js              # Work history + bullet points
│   │   └── education.js               # Degree + coursework details
│   │
│   ├── hooks/                         # Custom React hooks
│   │   ├── useScrollProgress.js       # Tracks scroll % for progress bar
│   │   ├── useIntersectionObserver.js # Triggers fade-in on scroll
│   │   └── useCursor.js               # Custom cursor mouse tracking
│   │
│   ├── styles/                        # Global styles
│   │   ├── globals.css                # Resets, base styles, animations
│   │   └── variables.css              # Design tokens (colors, spacing)
│   │
│   ├── App.js                         # Root component — wires everything
│   └── index.js                       # React entry point
│
├── netlify.toml                       # Netlify build + SPA redirect config
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 16.x`
- npm `>= 8.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/amanadhikari45/Aman-Portfolio.git
cd Aman-Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app runs at `http://localhost:3000` with hot reload enabled.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Output lands in /build — ready to deploy anywhere
```

---

## 🌐 Deployment

This project auto-deploys to **Netlify** on every push to `main`.

```
Push to GitHub  →  Netlify detects change  →  npm run build  →  deploys /build
```

Manual deploy config in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200        # SPA fallback — handles client-side routing
```

---

## 🧠 Architecture Decisions

**CSS Modules over styled-components** — scoped styles without a runtime dependency. Each component owns its styles; zero class name conflicts across the entire app.

**Data files over hardcoded JSX** — all content (projects, skills, experience) lives in `/data/*.js`. Updating the portfolio means editing a data file, not hunting through JSX trees.

**Custom hooks over libraries** — `useScrollProgress`, `useIntersectionObserver`, and `useCursor` are small, focused hooks that do exactly one thing each. No third-party animation library needed.

**CSS Variables for theming** — every color, gradient, and spacing value is a token in `variables.css`. Changing the entire color palette is a one-file edit.

---

## 📌 Featured Projects

| # | Project | Stack | Status |
|---|---------|-------|--------|
| 01 | **GovLens** — Government Analytics Platform | Spring Boot 3.2 · React 18 · PostgreSQL · GPT-4 · Docker | ✅ Live |
| 02 | **RidePool** — AI Ride-Sharing for Students | Java 17 · Spring Boot · RAG · NLP · WebSocket | 🔨 Building |
| 03 | **Brain MRI Segmentation** | U-Net · PyTorch · BraTS Dataset · Streamlit | ✅ Complete |
| 04 | **HemaVision** — Blood Cell Classification | CNN · PyTorch · OpenCV · Medical Imaging | ✅ Complete |
| 05 | **Chest X-Ray Classification** | DenseNet121 · Grad-CAM · NIH Dataset · Streamlit | ✅ Complete |
| 06 | **Sign Language Recognition** | Flutter · TensorFlow Lite · CNN · Edge Inference | ✅ Complete |

---

## 👤 About Me

**Aman Adhikari**
MS Computer Science — Wright State University, Dayton OH
Expected Graduation: Summer / Fall 2026 · **CPT Authorized · No Sponsorship Required**

3+ years of combined experience in software development, ML research, and university-level teaching. Former Senior Developer and Database Systems Lecturer at Itahari International College, Nepal — managing web infrastructure for 3,000+ students and teaching 100+ undergraduate engineers annually.

| | |
|---|---|
| 📧 Email | adhikari.80@wright.edu |
| 💼 LinkedIn | [linkedin.com/in/aman-adhikari-3b295617b](https://linkedin.com/in/aman-adhikari-3b295617b) |
| 💻 GitHub | [github.com/amanadhikari45](https://github.com/amanadhikari45) |
| 🌐 Portfolio | [aman-adhikari.netlify.app](https://aman-adhikari.netlify.app) |

---

## 📄 License

MIT © 2025 Aman Adhikari

Feel free to use this as inspiration for your own portfolio. If you do, a ⭐ on the repo is always appreciated!
