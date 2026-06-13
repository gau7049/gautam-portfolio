# Design System Specification
## Gautam Paliwal | Premium SaaS-Inspired Portfolio

---

## 🎨 Color Palette

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| **Background** | Off-White | `#FAFAFA` | Main page background |
| **Card Background** | Pure White | `#FFFFFF` | Cards, containers |
| **Primary Text** | Dark Gray | `#111827` | Headings, primary copy |
| **Secondary Text** | Medium Gray | `#6B7280` | Body text, descriptions |
| **Accent (Primary)** | Cyan | `#06B6D4` | CTAs, highlights, interactive |
| **Accent (Secondary)** | Purple | `#8B5CF6` | Optional highlights |
| **Border** | Light Gray | `#E5E7EB` | Dividers, subtle borders |
| **Success** | Green | `#10B981` | Status indicators |
| **Hover State** | Lighter Gray | `#F3F4F6` | Card hover backgrounds |

---

## 📝 Typography System

### Font Stack
- **Headings:** Satoshi or General Sans (fallback: Inter)
- **Body:** Inter
- **Monospace:** Fira Code (for code snippets)

### Hierarchy

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **H1 (Hero)** | 64–72px | 700 | 1.2 | -0.02em | Main hero headline |
| **H2 (Section)** | 40–48px | 600 | 1.3 | -0.01em | Section headings |
| **H3 (Card)** | 24–28px | 600 | 1.4 | 0 | Card titles |
| **Body Large** | 18px | 400 | 1.6 | 0 | Descriptions, intro text |
| **Body** | 16px | 400 | 1.6 | 0 | Standard body copy |
| **Body Small** | 14px | 400 | 1.5 | 0 | Secondary info, captions |
| **Label** | 12px | 500 | 1.4 | 0.05em | Tags, badges |

---

## 📐 Spacing System

### Base Unit: 4px (0.25rem)

| Scale | Value | Usage |
|-------|-------|-------|
| **xs** | 4px | Micro spacing |
| **sm** | 8px | Tight spacing |
| **md** | 16px | Standard spacing |
| **lg** | 24px | Comfortable spacing |
| **xl** | 32px | Component spacing |
| **2xl** | 48px | Content gap |
| **3xl** | 64px | Section spacing |
| **4xl** | 96px | Major section spacing |
| **5xl** | 120px | Page section top/bottom |

### Layout Spacing
- **Section Vertical Padding:** 120px top and bottom
- **Section Horizontal Padding:** 32px (desktop), 16px (mobile)
- **Container Max Width:** 1280px
- **Content Gap:** 48px
- **Card Padding:** 24–32px

---

## 🎯 Component Specifications

### Buttons

**Primary Button**
- Background: `#06B6D4`
- Text: White
- Padding: 12px 24px
- Border Radius: 8px
- Font Weight: 600
- Hover: Darker cyan with subtle shadow
- Active: Scale 0.98

**Secondary Button**
- Background: `#F3F4F6`
- Text: `#111827`
- Padding: 12px 24px
- Border Radius: 8px
- Hover: `#E5E7EB` background

**Ghost Button**
- Background: Transparent
- Text: `#06B6D4`
- Border: 1px solid `#E5E7EB`
- Hover: `#F3F4F6` background

### Cards

**Standard Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E5E7EB`
- Padding: 24–32px
- Border Radius: 12px
- Box Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Hover Shadow: `0 10px 25px rgba(0,0,0,0.08)`
- Hover Transform: translateY(-4px)

**Project Card**
- Image: 16:9 aspect ratio, 12px top border-radius
- Title: 24px, weight 600
- Description: 16px, `#6B7280`
- Tech Stack: Badges with `#F3F4F6` background
- CTA Links: Inline with arrow icon

### Badges

**Technology Badge**
- Background: `#F3F4F6`
- Text: `#111827`
- Padding: 6px 12px
- Border Radius: 6px
- Font Size: 12px
- Font Weight: 500
- Hover: `#E5E7EB` background

**Status Badge**
- Background: `#DBEAFE` (for info)
- Text: `#0369A1`
- Padding: 4px 8px
- Border Radius: 4px

### Inputs

**Text Input**
- Background: `#FFFFFF`
- Border: 1px solid `#E5E7EB`
- Padding: 12px 16px
- Border Radius: 8px
- Focus: Border `#06B6D4`, box-shadow `0 0 0 3px rgba(6,182,212,0.1)`

---

## ✨ Motion System

### Animation Principles
- **Duration:** 200–400ms for UI animations
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (smooth ease-out)
- **Entrance:** Opacity + Y translate (from -20px)
- **Exit:** Opacity fade
- **Hover:** Subtle scale (1.02) and shadow lift

### Specific Animations

**Section Reveal**
- Duration: 600ms
- Delay: Staggered 100ms per item
- Easing: Ease-out
- Properties: opacity, transform (y)

**Card Hover**
- Duration: 300ms
- Transform: translateY(-4px)
- Shadow: Increase to `0 10px 25px rgba(0,0,0,0.08)`
- Scale: 1.02 on hover

**Button Press**
- Duration: 100ms
- Transform: scale(0.98)
- Easing: Ease-out

**Counter Animation**
- Duration: 2000ms (total)
- Easing: Ease-out
- Trigger: On scroll into view

**Link Hover**
- Underline: Animated from 0% to 100%
- Duration: 300ms
- Color: Fade to accent

---

## 🎬 Micro-interactions

### Magnetic Buttons
- Cursor proximity detection
- Button attracts toward cursor
- Smooth follow animation
- Reset on cursor leave

### Link Hover Indicators
- Underline animation (left to right)
- Color transition to accent
- Duration: 300ms

### Card Elevation
- Hover: Lift with shadow increase
- Active: Slight scale down (0.98)
- Smooth transition: 300ms

### Scroll Progress Indicator
- Horizontal bar at top
- Width: 0–100% based on scroll
- Color: Gradient from cyan to purple
- Height: 2px
- Position: Fixed top

### Cursor-Aware Highlights
- Subtle glow effect on hover
- Follows cursor position
- Fade in/out: 200ms

---

## 📱 Responsive Design

### Breakpoints
- **Mobile:** 320px–640px
- **Tablet:** 641px–1024px
- **Desktop:** 1025px+

### Mobile Adjustments
- Hero heading: 40–48px (from 64–72px)
- Section heading: 28–32px (from 40–48px)
- Section padding: 16px (from 32px)
- Section spacing: 64px (from 120px)
- Card padding: 16px (from 24–32px)

---

## 🔍 Visual Hierarchy

### Emphasis Levels

**Level 1 (Highest):** Hero heading, primary CTAs
- Size: 64–72px
- Weight: 700
- Color: `#111827`

**Level 2 (High):** Section headings, card titles
- Size: 24–40px
- Weight: 600
- Color: `#111827`

**Level 3 (Medium):** Body text, descriptions
- Size: 16–18px
- Weight: 400
- Color: `#111827` or `#6B7280`

**Level 4 (Low):** Secondary info, captions
- Size: 12–14px
- Weight: 400
- Color: `#6B7280`

---

## 🎨 Visual Effects

### Shadows

**Subtle (Cards):** `0 1px 3px rgba(0,0,0,0.1)`

**Medium (Hover):** `0 4px 12px rgba(0,0,0,0.08)`

**Large (Modals):** `0 10px 25px rgba(0,0,0,0.1)`

### Borders

**Default:** 1px solid `#E5E7EB`

**Accent:** 2px solid `#06B6D4`

**Focus:** 3px solid `rgba(6,182,212,0.5)`

### Gradients

**Accent Gradient:** `linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)`

**Text Gradient:** `linear-gradient(135deg, #06B6D4 0%, #111827 100%)`

---

## ♿ Accessibility

### Color Contrast
- Text on background: ≥ 4.5:1 (WCAG AA)
- Large text: ≥ 3:1
- Interactive elements: Clear focus states

### Focus States
- Focus ring: 2px solid `#06B6D4`
- Offset: 2px
- Always visible

### Motion
- Respect `prefers-reduced-motion`
- Disable animations if user preference set
- Provide static alternatives

### Typography
- Minimum font size: 12px
- Maximum line length: 80 characters
- Line height: ≥ 1.5

---

## 🚀 Performance Targets

- **Lighthouse Performance:** 95+
- **Lighthouse Accessibility:** 95+
- **Lighthouse SEO:** 95+
- **Animation FPS:** 60fps
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s

---

## 📦 Implementation Notes

### CSS Variables
```css
:root {
  --color-bg: #FAFAFA;
  --color-card: #FFFFFF;
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-accent: #06B6D4;
  --color-accent-secondary: #8B5CF6;
  --color-border: #E5E7EB;
  
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;
  --spacing-5xl: 120px;
  
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
  
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 600ms;
  --easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🎯 Design Principles

1. **Premium Minimalism** — Less is more. Every element has purpose.
2. **Product-First** — Design like a SaaS product, not a resume.
3. **Performance Matters** — Smooth animations, fast load times.
4. **Clarity Over Decoration** — Content hierarchy is paramount.
5. **Consistency** — Unified spacing, typography, and color usage.
6. **Accessibility** — Inclusive design for all users.
7. **Micro-interactions** — Delight through thoughtful details.

---

**Last Updated:** June 13, 2026  
**Version:** 2.0 (SaaS Redesign)
