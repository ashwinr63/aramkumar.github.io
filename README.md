Ashwin Ramkumar’s resume-style site built with Vite + React + TypeScript and Framer Motion (reduced-motion respected). Deployed to GitHub Pages as a static build.

Local dev
- npm ci
- npm run dev
- npm run build

GitHub Pages
- Custom domain: https://ashwinramkumar.dev
- Assets served from root (`/`) via Vite `base: '/'`
- Workflow builds on pushes to `main` and deploys `dist` to Pages
- DNS (Cloudflare): CNAME `www` → `ashwinr63.github.io`; apex via CNAME flattening or A records to GitHub Pages IPs