# Chandel Family — Royal Digital Invitation

## Files
- `index.html` — invitation content and metadata
- `styles.css` — responsive royal ivory, maroon and antique-gold design
- `script.js` — bilingual switcher, IST countdown, audio controls and scroll reveals
- `assets/lord-rama.jpg` — the single devotional image
- `assets/devotional-flute.mp3` — optional background flute audio

## Add your media
Copy `lord-rama.jpg` and `devotional-flute.mp3` into the `assets/` folder. Keep the filenames exactly as shown. The invitation still works without the MP3, but the Rama image should be added before publishing.

## Preview
Open `index.html` in a browser. For the best test of local audio and social metadata, run it from a local static server or deploy it.

## Deploy
Upload the complete folder to GitHub and connect the repository to Vercel (Framework Preset: Other; Build Command: leave empty; Output Directory: `.`). No build step is required.

After deployment, replace `YOUR-VERCEL-DOMAIN` in the Open Graph URL and image tags in `index.html` with the real deployed domain. Social preview crawlers generally require an absolute, publicly accessible image URL.

The date countdown is locked to India Standard Time (UTC+05:30). Event timings are intentionally omitted.

### Hero entrance photograph
The supplied ceremonial doorway photograph is included at `assets/griha-pravesh-entrance.png` and is used as the background image of the hero section. Keep this file in the same relative path when deploying.
