# Evergreen Assisted Care Website

Vercel-ready React/Vite website package.

## Local preview

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Upload this folder to a new GitHub repository.
2. Go to Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Use the defaults:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
5. Click Deploy.

## Connect GoDaddy domain to Vercel

After deployment, go to:

Vercel Project > Settings > Domains

Add your domain, then update DNS at GoDaddy using the records Vercel provides.

Typical records:

- A record: `@` -> `76.76.21.21`
- CNAME: `www` -> `cname.vercel-dns.com`

Check Vercel's current instructions before switching DNS.
