# GLS Infotech - Marketing Website

A static, single-file marketing website for GLS Infotech.

## Overview

This is a pure HTML/CSS/JS static site — no build step required.
Just open `index.html` in a browser or host it on any static hosting (Netlify, Vercel, GitHub Pages, S3).

## Features

- **Mobile responsive** — works on all screen sizes
- **Modern B2B design** — deep indigo/blue professional theme
- **Single file** — all CSS and JS inline, zero dependencies

## Sections

1. **Navbar** — Logo + navigation + CTA
2. **Hero** — Main value proposition
3. **Services** — Sales, Service & Repair, Leasing, IT Equipment
4. **Why GLS** — Key differentiators
5. **How It Works** — Simple 3-step leasing process
6. **Contact** — Quote request form + contact info
7. **Footer** — Copyright + links

## Deployment

Simply upload `index.html` to any web host or CDN.
For a custom domain, point DNS to your hosting provider.

## Contact Form

The contact form currently shows a success message on submit (no backend).
To make it functional, integrate with:
- [Formspree](https://formspree.io) — add `action="https://formspree.io/f/YOUR_ID"` to the form
- [EmailJS](https://emailjs.com) — send emails directly from JS
- Custom backend endpoint
