# Gautam Paliwal | Full-Stack Engineer Portfolio

A modern, premium portfolio website built with **React 19**, **TypeScript**, and **Tailwind CSS**. Designed for software engineers applying to top companies and fast-growing startups.

**Live Demo:** [gautam-portfolio.manus.space](https://gautam-portfolio.manus.space)

---

## 🎯 Overview

This portfolio showcases a full-stack engineer's technical expertise, engineering impact, and professional achievements. The design follows a "Technical Minimalism with Depth" philosophy, inspired by premium tech brands like Linear, Vercel, and Stripe.

**Key Highlights:**
- **1 Lakh+ Active Users** — Production platform serving massive scale
- **~30% Bug Reduction** — Performance optimization impact
- **400+ DSA Problems** — Algorithmic depth and commitment
- **MERN Stack Expertise** — React, Node.js, MongoDB, Express
- **End-to-End Ownership** — Frontend architecture to backend APIs

---

## ✨ Design Philosophy

### Technical Minimalism with Depth
The portfolio prioritizes **content-first architecture** with sophisticated restraint. Every visual element serves the narrative of technical impact and problem-solving.

**Design Characteristics:**
- **Dark Mode First** — Deep charcoal background (`#1f1f2e`) reduces eye strain
- **Vibrant Cyan Accents** — Signals technical sophistication (`#a8e6ff`)
- **Asymmetric Layouts** — Breaks generic portfolio patterns
- **Subtle Animations** — Smooth transitions using Framer Motion
- **Professional Typography** — Geist (display) + Inter (body)
- **Generous Whitespace** — Sections breathe and feel premium

---

## 🚀 Features

### Sections
- **Hero** — Asymmetric layout with animated gradient background
- **About** — Professional summary with key metrics
- **Experience** — Timeline showcasing roles and impact
- **Featured Projects** — Case studies with technologies and links
- **Technical Skills** — Organized by category (Frontend, Backend, Tools)
- **Achievements** — Recognition and accomplishments
- **Contact** — Email, GitHub, LinkedIn links

### Technical Features
- ✅ **Smooth Animations** — Entrance animations, hover effects, scroll interactions
- ✅ **Responsive Design** — Mobile-first, works on all devices
- ✅ **Dark Mode** — Default theme with optional light mode toggle
- ✅ **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, sitemap
- ✅ **Accessibility** — WCAG 2.1 AA compliance, semantic HTML
- ✅ **Performance** — Optimized images, lazy loading, fast build
- ✅ **TypeScript** — Full type safety across the codebase

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Tailwind CSS 4 |
| **Animation** | Framer Motion |
| **UI Components** | shadcn/ui, Radix UI, Lucide Icons |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS with OKLCH colors |
| **Fonts** | Geist, Inter (Google Fonts) |
| **Deployment** | Manus (or any static host) |

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** 18+ (recommended 20+)
- **npm** 10+ or **pnpm** 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/gau7049/gautam-portfolio.git
cd gautam-portfolio

# Install dependencies (use npm, not pnpm for compatibility)
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:5173
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally
npm start            # Start production server

# Quality
npm run check        # TypeScript type checking
npm run format       # Format code with Prettier
```

---

## 📁 Project Structure

```
gautam-portfolio/
├── client/                    # Frontend application
│   ├── src/
│   │   ├── pages/            # Page components (Home, NotFound)
│   │   ├── components/       # Reusable UI components
│   │   ├── contexts/         # React contexts (Theme)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   ├── App.tsx           # Main app component with routing
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles & design tokens
│   ├── public/               # Static files (favicon, robots.txt, sitemap.xml)
│   └── index.html            # HTML template
├── server/                    # Backend server (Express)
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

---

## 🎨 Design System

### Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| **Background** | `oklch(0.12 0.01 250)` | Main background (dark charcoal) |
| **Foreground** | `oklch(0.92 0.01 250)` | Text (soft white) |
| **Accent** | `oklch(0.65 0.15 200)` | CTAs, highlights (vibrant cyan) |
| **Muted** | `oklch(0.35 0.02 250)` | Secondary text (slate gray) |
| **Card** | `oklch(0.16 0.01 250)` | Card backgrounds |

### Typography

- **Display Font:** Geist (bold, modern)
- **Body Font:** Inter (clean, readable)
- **H1:** 48–56px, font-weight 700
- **H2:** 32–40px, font-weight 600
- **Body:** 16px, font-weight 400, line-height 1.6

### Spacing
- Base unit: `0.25rem` (4px)
- Sections: `6rem` (96px) vertical padding
- Components: `1rem` (16px) internal padding

---

## 🔧 Customization

### Update Personal Information

Edit `client/src/pages/Home.tsx`:

```tsx
// Update hero section
<h1 className="mb-6 leading-tight">
  I build products that scale
</h1>

// Update experience
<TimelineItem
  role="Your Role"
  company="Your Company"
  period="Start – End"
  location="City, State"
  highlights={[
    "Achievement 1",
    "Achievement 2",
  ]}
/>

// Update projects
<ProjectCard
  title="Project Name"
  description="Project description"
  technologies={["Tech1", "Tech2"]}
  link="https://github.com/..."
/>
```

### Update Metadata

Edit `client/index.html`:

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name | Your Title" />
```

### Update Colors

Edit `client/src/index.css`:

```css
:root {
  --primary: oklch(0.65 0.15 200); /* Change accent color */
  --background: oklch(0.12 0.01 250); /* Change background */
  /* ... other colors */
}
```

---

## 📊 Performance

The portfolio is optimized for speed and accessibility:

| Metric | Target | Status |
|--------|--------|--------|
| **Lighthouse Performance** | 95+ | ✅ Optimized |
| **Accessibility** | 95+ | ✅ WCAG 2.1 AA |
| **SEO** | 95+ | ✅ Meta tags, sitemap |
| **Best Practices** | 95+ | ✅ Security headers |

**Optimizations:**
- Image compression (WebP format)
- Lazy loading for images
- Code splitting with Vite
- CSS purging with Tailwind
- Minified production build

---

## 🔐 SEO & Social

The portfolio includes comprehensive SEO setup:

- **Meta Tags** — Title, description, keywords
- **Open Graph** — LinkedIn, Facebook sharing preview
- **Twitter Cards** — Twitter sharing with image
- **Canonical URL** — Prevents duplicate content
- **Sitemap** — `robots.txt` and `sitemap.xml`
- **Structured Data** — Ready for schema markup

---

## ♿ Accessibility

The portfolio meets **WCAG 2.1 AA** standards:

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ ARIA labels where needed
- ✅ Color contrast ratios ≥ 4.5:1
- ✅ Respects `prefers-reduced-motion`

---

## 🚀 Deployment

### Deploy to Manus (Recommended)
The portfolio is built for Manus hosting with zero configuration:

```bash
npm run build
# Push to GitHub, then use Manus UI to publish
```

### Deploy to Other Platforms

**Vercel:**
```bash
vercel
```

**Netlify:**
```bash
netlify deploy --prod --dir=dist/public
```

**GitHub Pages:**
```bash
npm run build
# Push dist/public to gh-pages branch
```

---

## 🐛 Troubleshooting

### Dependency Conflicts

If you encounter npm dependency errors:

```bash
# Option 1: Use npm with legacy peer deps
npm install --legacy-peer-deps

# Option 2: Use pnpm (recommended)
pnpm install

# Option 3: Delete lock file and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dev Server Not Starting

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Reinstall dependencies
npm install

# Start dev server
npm run dev
```

### Build Errors

```bash
# Type check
npm run check

# Format code
npm run format

# Build
npm run build
```

---

## 📝 Content Guidelines

### Writing for Recruiters

When updating content, keep these principles in mind:

1. **Quantify Impact** — Use metrics (1 lakh+ users, 30% reduction)
2. **Technical Depth** — Mention specific technologies and architectures
3. **Problem-Solving** — Explain challenges and solutions
4. **Authenticity** — Only include achievements you can discuss in interviews
5. **Clarity** — Use professional language without jargon

### Example Achievement

❌ **Weak:** "Worked on a chat application"

✅ **Strong:** "Built a real-time chat application with JWT authentication, Socket.io-powered instant messaging, and live online/offline presence indicators—demonstrating end-to-end MERN proficiency."

---

## 🤝 Contributing

This is a personal portfolio, but you can fork and customize it for your own use.

---

## 📄 License

MIT License — Feel free to use this as a template for your portfolio.

---

## 👤 About

**Gautam Paliwal** — Full-Stack Software Engineer

- **Email:** gautampaliwal.ce@gmail.com
- **GitHub:** [@gau7049](https://github.com/gau7049)
- **LinkedIn:** [@gautampaliwal](https://www.linkedin.com/in/gautampaliwal/)
- **Twitter:** [@Gautam_Paliwal_](https://x.com/Gautam_Paliwal_)

---

## 🙏 Acknowledgments

- Design inspiration: Linear, Vercel, Stripe, OpenAI
- UI Components: shadcn/ui, Radix UI
- Icons: Lucide React
- Animations: Framer Motion
- Styling: Tailwind CSS

---

**Built with ❤️ for software engineers applying to top companies.**
