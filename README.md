# codingiskey.com

Leanne Lacey Byrne's portfolio — React + Vite, single page.

```
npm install
npm run dev
```

## Editing content

All copy lives in `src/content.js`. To add a photo or CV, drop the file into `public/` and set `profile.photo` / `profile.cv` (e.g. `'/leanne.jpg'`, `'/Leanne-CV.pdf'`). Without a CV the hero shows a LinkedIn button instead.

## Deploying

`netlify.toml` pins the build. Connect the GitHub repo to Netlify, then point the codingiskey.com DNS at GoDaddy to Netlify.
