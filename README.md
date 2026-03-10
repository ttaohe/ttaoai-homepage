# TTAOAI Landing Page

A minimal static landing page for `ttaoai.cn`.

This project is designed as a calm first impression: a large floating wordmark, soft ambient glow, and a staged reveal that brings in the supporting copy after the title has settled into view.

## Style characteristics

- Apple-like restraint and spacing
- dark background with soft blue-violet light
- subtle floating motion instead of heavy visual effects
- staged entrance sequence for a more intentional opening feel
- static assets only: simple to host, simple to maintain

## Project structure

- `index.html`: page structure and brand copy
- `style.css`: layout, glow, typography, and animation timing
- `script.js`: pointer-based depth and letter parallax

## Local preview

1. Open a terminal.
2. Run:
   ```bash
   python3 -m http.server 4173 --directory /Users/ttaohe/master/code/dev/ttaoai-homepage
   ```
3. Visit:
   `http://127.0.0.1:4173`

## Deployment

Deployment notes are in [`docs/deployment.md`](docs/deployment.md).
