# Sreejith T: Portfolio
## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build && npm run preview
## Deploy
Vercel: import the repo (framework: Vite, build `npm run build`, output `dist`). Netlify: same build command, publish dir `dist`.
## Add a project
Append one object to `src/data/projects.ts`.
## Placeholders to fill
- `public/resume.pdf` (button shows "Resume coming soon" until it exists)
- Repo URLs in `src/data/projects.ts` (PDF Chatbot links the GitHub profile for now; the other two have no GitHub button)
- `public/og-image.png` + canonical / og:image domain in `index.html`
