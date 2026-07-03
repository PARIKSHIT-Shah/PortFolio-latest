# Parikshit Shah — 3D Portfolio (PRD)

## Original Problem Statement
Build a 3D personal portfolio for Parikshit Shah — 3rd year B.Tech CSE (AI/ML) student
at Techno India University, aspiring web/full-stack developer. Should be attractive,
aesthetic, modern, with a 3D animated cursor. Requested Three.js. User accepted React
+ Three.js delivery, elegant minimal theme, all types of 3D elements, and a magnetic+trail
cursor mix.

## Architecture
- React 19 + react-three-fiber (v9 RC) + drei 9.114 + three 0.160
- Framer Motion for reveals, custom cursor, magnetic interactions
- Lenis smooth scroll
- Tailwind CSS, Outfit + Manrope fonts
- No backend consumed (portfolio is fully static frontend on this deploy)

## Implemented Features (Dec 2025)
- Custom Magnetic Trail Cursor (aura + inner dot + trail) with data-cursor labels
- Sticky pill nav with in-page anchors
- Hero: 3D icosahedron (transmission material) + gold torus rings + sparkles + shimmering typography
- About: bio + stats + 3D neural-node canvas
- Skills: bento grid across 6 categories + marquee band
- Projects: 6 project case cards with thumbnails, stacks, accents
- Journey: education timeline + achievements list
- Contact: massive typography footer + email/phone/GitHub/LinkedIn cards

## Personas
Primary — Parikshit (portfolio owner, showcasing to recruiters).
Secondary — Recruiters/collaborators viewing his work.

## Backlog (P1)
- Add contact form with backend endpoint (currently mailto links only)
- Add subtle background music toggle
- Case-study drill-down pages per project
- Blog/Notes section, testimonials
