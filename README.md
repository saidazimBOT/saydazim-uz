# Saidazim — Creative Developer & IT Innovator Portfolio

A high-performance, modern personal developer portfolio website engineered with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## ⚡ Key Highlights & Visual Aesthetic

- **Cyber Aesthetic Theme**: Sleek slate-950 backdrop with deep indigo/violet/cyan ambient glow gradients, interactive mouse spotlight, and scanline grid overlay.
- **Micro-Interactions & Physics**: Smooth Framer Motion transitions, spring choreography, typing effect, and celebratory confetti upon contact submission.
- **Glassmorphic Bento UI**: Modern `backdrop-blur-xl` panels with subtle 1px border highlights and interactive hover glowing borders.
- **Speed & Precision**: Highlights 130+ WPM typing efficiency, zero layout shift, semantic HTML, and strict TypeScript types.

---

## 🚀 Interactive Sections

1. **Dynamic Opening / Hero**:
   - Staggered page entrance animations and interactive particle/glowing grid matrix.
   - Large bold headline: *"Creative Developer & IT Innovator"*.
   - Dynamic typewriter role rotator (*Full-Stack Web Developer, 3D & Interactive Web Enthusiast, Typing Master / Speed Coder 130+ WPM*).
   - Rotating cyber avatar container (`/profile.jpg`) with floating interactive badges.
   - Direct CTA buttons: *"View Projects"* and *"Contact Me"*.

2. **About Me (Bento Grid)**:
   - **Fast & Precision Coding**: 130+ WPM benchmark, 99.4% accuracy, sub-0.05s latency, and interactive keystroke counter.
   - **Modern Tech Stack**: Next.js App Router, Three.js / WebGL, Tailwind CSS, Convex, Supabase.
   - **Interactive UI/UX & Automation**: Spring physics, AI developer pipelines, and accessibility.
   - **Developer Battlestation**: Workspace photo preview (`/workspace.jpg`) and setup specs.

3. **Tech Stack & Skills**:
   - Filterable skills grid by category (*All, Frontend & 3D, Backend & Cloud, Dev Tools & Workflow*).
   - Animated progress bars, proficiency ratings, and hover tooltips.
   - Continuous ecosystem pill banner.

4. **Featured Projects Showcase**:
   - **KeyPulse**: Elite speed coding and touch-typing platform with real-time telemetry.
   - **NovaSphere 3D**: Immersive WebGL showroom powered by Three.js and custom GLSL shaders.
   - **AetherDuel**: Turn-based cyberpunk tactical card game with AI heuristic opponents.
   - Zoom image containers (`/projects/project-1.jpg`, etc.), live demo & GitHub repository links, and interactive architecture details modal.

5. **Milestone Timeline**:
   - Vertical animated timeline displaying evolution from CS genesis (2022) to high-speed development and 3D WebGL architectures (2026).

6. **Contact & Footer**:
   - Interactive message form with instant validation, transmission feedback, and `canvas-confetti` fireworks.
   - Direct social channels: **Telegram**, **GitHub**, and **YouTube**.
   - 1-click **Copy Email** button with toast feedback.
   - Smooth "Back to top" navigation.

---

## 🛠️ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 🖼️ Replacing Placeholder Photos

All images are easily replaceable by dropping your files into the `public/` folder:

| File Path | Description | Dimensions |
|---|---|---|
| `public/profile.jpg` | Personal developer avatar photo | `800x800` (1:1) |
| `public/workspace.jpg` | Battlestation / developer workspace | `1200x800` (3:2 or 16:9) |
| `public/projects/project-1.jpg` | KeyPulse Speed Typing screenshot | `1200x800` (16:10) |
| `public/projects/project-2.jpg` | NovaSphere 3D Showroom screenshot | `1200x800` (16:10) |
| `public/projects/project-3.jpg` | AetherDuel Card Game screenshot | `1200x800` (16:10) |

To regenerate the vector-crafted cyber placeholders at any time:
```bash
node scripts/generate-placeholders.js
```

---

## 📂 Project Architecture

```
├── app/
│   ├── globals.css          # Tailwind CSS v4 setup, custom glow & scrollbars
│   ├── layout.tsx           # Metadata, viewport, Geist font configuration
│   └── page.tsx             # Root page composing all modular sections
├── components/
│   ├── About.tsx            # Storytelling & interactive Bento grid
│   ├── BackgroundEffect.tsx # Dynamic ambient radial glows, grid & mouse spotlight
│   ├── Contact.tsx          # Form micro-interactions, confetti & direct social links
│   ├── Footer.tsx           # Footer, social hub & smooth back-to-top button
│   ├── Hero.tsx             # Opening entrance, typewriter badges & avatar showcase
│   ├── Icons.tsx            # Clean SVG icons (GitHub, YouTube, Telegram)
│   ├── Navbar.tsx           # Glassmorphic header, active section spy & mobile drawer
│   ├── Projects.tsx         # Standout project cards, zoom previews & details modal
│   ├── Skills.tsx           # Categorized interactive tech stack & proficiencies
│   └── Timeline.tsx         # Vertical journey milestones
├── public/                  # Static assets & images
│   ├── profile.jpg
│   ├── workspace.jpg
│   └── projects/
└── scripts/
    └── generate-placeholders.js  # Sharp-based image generator
```
# sayidazimxoja
# saydazim
# saydazim
