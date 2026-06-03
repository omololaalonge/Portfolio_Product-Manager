# Omolola Alonge - Project/Product Manager Portfolio

A single-page portfolio website for Omolola Alonge, built with Next.js, TypeScript, and Tailwind CSS. The site is optimized for recruiter scanning, static export, GitHub hosting, and Vercel deployment.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- Static export-ready configuration

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
```

The app is configured with `output: "export"` in `next.config.ts`, so `npm run build` also produces a static `out` directory.

## GitHub setup

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPO_URL` with the HTTPS or SSH URL for your GitHub repository.

## Vercel deployment

1. Sign in to Vercel.
2. Click `Add New...` then `Project`.
3. Import the GitHub repository.
4. Keep the framework preset as `Next.js`.
5. Use the default install command, build command, and output settings.
6. Click `Deploy`.

Vercel will redeploy automatically whenever changes are pushed to the main branch.

## Customization notes

- Replace the placeholder PDF path in `components/Hero.tsx` when the real CV or portfolio PDF is available.
- Update metadata in `app/layout.tsx` if the public site URL or sharing image changes.
