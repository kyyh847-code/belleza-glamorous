# Design Brief — Belleza Glamorous Makeup Studio

## Overview
Premium luxury makeup artist website with refined elegance, sophisticated 3D animations, and editorial aesthetic. Rose-pink and cream palette with glassmorphism, celebrating bridal makeup artistry and celebrity collaborations.

## Tone & Purpose
Glamorous yet understated confidence. Editorial luxury for a professional makeup artist studio. Conveys premium craftsmanship, exclusivity, and meticulous attention to detail. Aspirational but accessible.

## Color Palette (OKLCH)
| Role | Value | Usage |
|------|-------|-------|
| Primary | 0.63 0.16 330 | Dominant rose-pink; headings, CTAs, key accents |
| Secondary | 0.35 0.08 330 | Deep mauve; body text, secondary elements |
| Accent | 0.82 0.12 340 | Blush pink; highlights, active states, emphasis |
| Background | 0.98 0.02 80 | Creamy white; page base |
| Card | 0.96 0.01 80 | Off-white; glassmorphic card backgrounds |
| Muted | 0.93 0.02 80 | Light cream; section alternation |

## Typography
| Layer | Font | Usage |
|-------|------|-------|
| Display | Fraunces (Serif) | Headings, hero title, premium editorial accents |
| Body | DM Sans (Sans) | Body text, descriptions, navigation |
| Mono | Geist Mono | Code blocks, technical details |

## Elevation & Depth
- **Glassmorphism**: backdrop-filter blur(12px), 0.7 opacity base, subtle borders
- **Shadows**: `shadow-subtle` (2px, 0.04 opacity) for cards; `shadow-elevated` (8px, 0.08 opacity) for modals
- **Glows**: Pink (0 0 30px rgba(204,102,153,0.25)) on accent elements; muted on hero particles
- **Z-depth**: Hero particles > sections > backgrounds

## Structural Zones
| Zone | Background | Border | Notes |
|------|------------|--------|-------|
| Header | 0.98 0.02 80 (cream) | 0.88 0.02 80 (subtle) | Minimal, transparent nav |
| Hero | Gradient: blush→rose + 3D particles | None | Full-width, moving objects |
| Sections | Alternate 0.96 L (off-white) + 0.93 L (cream) | 0.88 L subtle | Glassmorphic cards within |
| Footer | 0.98 0.02 80 (cream) | 0.88 0.02 80 top border | Mauve text |

## Spacing & Rhythm
- Base unit: 4px (Tailwind default)
- Section vertical: 80px (4xl padding)
- Card padding: 32px (md sections), 24px (sm cards)
- Column gap: 16-24px
- Headings: 2.5rem (display), 1.875rem (section titles)

## Component Patterns
- **Hero**: Large serif title, 3D Canvas background with floating particles, call-to-action buttons
- **Service Cards**: Glassmorphic, icon + title + description, hover lift effect
- **Testimonials**: Photo + text with italic serif accent, rose primary color
- **Floating Buttons**: Position fixed, WhatsApp/Call (left), Instagram (right), subtle glow
- **Sections**: Full-width containers with alternating backgrounds, centered content max-width

## Motion & Animation
- **Float**: 3s ease-in-out infinite (particles, cards on hover)
- **Pulse-glow**: 2s ease-in-out infinite (accent highlights)
- **Fade-in**: 0.6s ease-out (section entries)
- **3D Transforms**: React Three Fiber + CSS 3D for hero parallax and card depth
- **Motion library**: Stagger animations for lists, smooth state transitions

## Constraints
- No harsh shadows or glows (avoid neon effect)
- Serif display font sparingly (headings only, max 3 per view)
- Cream backgrounds must remain warm (H: 80)
- All 10 makeup photos visible and properly loaded
- Floating buttons must not obstruct content on mobile

## Signature Detail
Glassmorphic cards with integrated rose glow on hero particles. 3D animated makeup application clips in service section. Celebrity badge with italic serif accent in testimonials. Soft backdrop-blur creates depth without overdoing transparency. Photography as hero element (professional studio work).

## Dark Mode
Dark variant: background 0.12, card 0.16, text 0.93 (cream). Primary pink remains 0.72 0.14 330. Accent brightens to 0.82 0.12 340. Maintains luxury feel with reduced eye strain.
