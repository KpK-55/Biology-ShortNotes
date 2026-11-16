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


PHASE 4 — GOOGLE DRIVE TWO-WAY SYNC + CONFLICT-SAFE BACKUP

1. Replace the repository's index.html and service-worker.js with the files in this package. Keep manifest.json and the icons/ folder.
2. Open the installed app while online. Open Drive Sync, select the Google OAuth tab, enter your OAuth Web Application Client ID, then sign in on EACH device.
3. In Google Cloud Console, enable Google Drive API. Add https://kpk-55.github.io as an Authorized JavaScript origin for the OAuth Web client. Configure the OAuth consent screen/test users as required by your Google account.
4. Choose Sync Now. The first device creates the Drive backup; the next device compares its local copy with Drive and asks before resolving differences.
5. Enable Auto-Sync only after a successful manual sync. Auto-Sync runs after successful local saves while the page is open and online.

SYNC SAFETY NOTES
- OAuth mode is required for conflict-aware two-way sync. The old Apps Script URL path is retained as a legacy/manual backup option; it is not used for two-way sync because its no-cors upload cannot verify a successful write or perform safe conflict checks.
- If both this device and Drive changed since their last common sync, a prompt asks which copy to keep. Choosing the Drive copy first records the current local state in the app's rolling snapshots. Choosing the local copy first uploads the remote copy as a separate dated ConflictBackup JSON before updating the main Drive backup.
- A normal local-only change uploads to the main Drive backup; a remote-only change downloads to this device. The app stores a per-browser sync baseline and device ID in localStorage. Do not clear site data if you want to retain that device's sync baseline.
- Google access tokens are held in memory, not permanently stored. Sign in again when the browser session/token expires.
- Drive sync requires internet. Offline edits remain in local IndexedDB and can sync after reconnecting while the app is open. Always keep periodic downloaded JSON backups as an additional safety layer.
