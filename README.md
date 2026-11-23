# Chandel Family — Royal Invitation 2027

A responsive static invitation website for the Chandel Family celebrations on 10–11 March 2027.

## Files
- `index.html` — page structure and event content
- `styles.css` — responsive styling, typography, decorative details and motion
- `script.js` — English/Hindi switching, countdown, music control and subtle reveal effects
- `assets/griha-pravesh-entrance.png` — supplied hero photograph

## Optional media
Add these files to `assets/` if desired:
- `lord-rama.jpg` — image in the divine blessings section
- `devotional-flute.mp3` — optional looping flute audio (starts only after the visitor taps the music control)

## Deploy
This is a static website. Upload the contents of this folder to the repository root. On Vercel choose **Other** as the framework preset, leave Build Command and Install Command empty, and set Output Directory to `.`. No `package.json` or build step is required.

The countdown uses India Standard Time (UTC+05:30). The displayed event date and details are in `index.html` and `script.js`.
