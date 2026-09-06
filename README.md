# Bestsellers (recreation)

A from-scratch React + Vite recreation of a book-showcase site's "3D book" hero
interaction, built as a coding exercise from a 23-second reference video. All
book titles, authors, cover art, and blurbs are original placeholder content —
no real book covers, jacket copy, or brand assets were copied.

## Stack

- React 19 + Vite
- GSAP for the open/close book animation
- Plain CSS 3D transforms (`perspective`, `preserve-3d`, `rotateY`) for the
  book geometry — no WebGL/Three.js

## What's built

- Header with logo, menu button, and a pill "Get Tickets" action
- A book shelf: giant wordmark behind three angled book covers
- Click-to-open interaction: the selected book animates open (cover tilts,
  page leaves fan out) into a detail view with blurb, rating, year, and
  purchase-style pill buttons, plus a small floating-leaf particle accent
- Close button returns to the shelf

## Not yet built

- Scroll-driven shelf entrance/parallax
- Additional catalog/browse pages beyond the single hero interaction
- Mobile-specific book geometry tuning (current layout is desktop-first)

## Dev

```
npm install
npm run dev
```
