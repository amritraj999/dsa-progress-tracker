# AlgoTrack — DSA Progress Tracker

A responsive, static DSA practice tracker built with **HTML, CSS, and vanilla JavaScript**. It links directly to LeetCode problems and saves your progress in your browser.

## Features

- Dashboard with total, solved, attempted, and not-started counts
- Search and filter by topic, difficulty, and status
- Direct LeetCode links open in a new tab
- Click a status control to cycle through Not started → Attempted → Solved
- Topic-wise completion analytics
- Revision queue and per-problem notes
- Automatic LocalStorage persistence
- Export/import a JSON backup to move progress between browsers
- Responsive desktop and mobile layout
- No build step, framework, API key, or backend required

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local development server, you can use the VS Code Live Server extension, or run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Build AlgoTrack DSA progress tracker"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your own values. If this folder is already a Git repository, skip `git init`.

## Host with GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`, then save.
5. Wait for the deployment and open the URL shown on the Pages settings screen.

Because this is a static site, GitHub Pages can host it without a server. Vercel or Netlify also work.

## Data and privacy

Progress is stored in the browser's LocalStorage on the current browser/device. It is **not automatically synchronized** between devices and may be lost if site data is cleared. Use **Export progress** regularly and **Import progress** on another device to transfer your backup. There is no login or cloud database in this version.

## LeetCode links and problem set

The dataset contains the 400 problems from the [DSA 400](https://dsa400.skutirx.com/) sheet, across 21 topics in roadmap order. Click a problem title (or **Solve on LeetCode**) to open it in a new tab. 364 problems link directly to LeetCode. The other 36 are classic GeeksforGeeks problems with no exact LeetCode equivalent, so they link to a GeeksforGeeks search and show **Solve on GFG**. Add entries to the `PROBLEMS` array in `app.js` to expand the sheet.

## Project files

- `index.html` — page structure
- `styles.css` — layout, colors, responsive styling
- `app.js` — problem dataset, filters, progress state, notes, import/export

## License note

This implementation is an independent tracker. If you reuse data, code, or assets from another repository, review that repository's license and attribution requirements first.
