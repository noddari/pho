# Photography portfolio

Plain HTML, CSS and JavaScript. No build step, works on any static host.

## Add your photos

1. Copy your photos into the `images` folder. Export them around 2000px on the long side and under 500 KB each so the page loads fast.
2. Open `js/photos.js` and add one line per photo (file path, title, category, short description).
3. Delete the placeholder `photo-XX.svg` files.

Categories you use become the filter buttons automatically.

## Edit the text

Everything else is in `index.html`: name, headline, About text, email and social links. Swap `images/photo-03.svg` in the About section for your own portrait.

## Publish on GitHub Pages

1. Create a new public repository on GitHub, for example `photography`.
2. Upload all files from this folder (Add file > Upload files), keeping the folder structure.
3. Go to Settings > Pages, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/photography/`.

Tip: name the repository `<your-username>.github.io` to get the shorter address `https://<your-username>.github.io/`.

## Other hosts

- Netlify: drag the whole folder onto app.netlify.com/drop.
- Vercel or Cloudflare Pages: import the GitHub repo, no build command, output folder is the root.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
