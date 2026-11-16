NEET BioNotes — PWA package

CONTENTS
- index.html: your existing Phase 1 HTML app, with PWA metadata and service-worker registration
- manifest.json: install name, display mode, theme and app icons
- service-worker.js: offline app-shell cache and public UI dependency cache
- icons/: 192px and 512px app icons

IMPORTANT
A service worker and PWA installation require HTTPS (or localhost). Opening index.html directly as a file will still run the standalone app, but it cannot install as a PWA or use the service worker.

GITHUB PAGES DEPLOYMENT
1. Create/open your GitHub repository.
2. Upload the CONTENTS of this folder (index.html, manifest.json, service-worker.js, icons folder) to the repository root.
3. In Settings > Pages, deploy from the main branch and root folder.
4. Open the published https:// address once while online.
5. In Chrome/Edge, use the browser menu > Install app / Add to Home screen.
6. After the first successful load, test by opening the installed app with internet disabled.

DATA SAFETY
The service worker caches application files only. Your notes remain in IndexedDB/local fallback and are not deleted when the service worker updates. Continue making JSON backups before testing.

LIMITATION
The app's existing Tailwind CDN and Google Fonts are fetched and cached after they are first loaded online. Google sign-in and Google Drive sync need an internet connection. This package does not claim that every external dependency is guaranteed offline before its first successful online load.


CHAPTER JSON WORKFLOW
- Use the sidebar's Export Chapter button to download the currently open chapter as a portable JSON file.
- Use Import Chapter to add a chapter JSON file. The app shows a confirmation preview before adding it.
- Imported chapters are assigned a unique internal ID. Importing the same file again creates another copy; it does not overwrite an existing chapter.
- Full-library backup JSON files can also be imported through Import Chapter; valid chapters are added as new copies.
- Keep a Full Backup before importing large collections. Individual chapter JSON files contain HTML content, including embedded images where present.
