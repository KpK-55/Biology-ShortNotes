NEET BioNotes – Automatic Apps Script Sync + UI Update

Deploy the contents of this folder to the root of your existing GitHub Pages repository. Keep the icons folder.

AUTOMATIC SYNC
- Local IndexedDB remains the immediate source of truth while editing, including offline.
- With Auto-Sync enabled, saved edits upload after a short debounce when online.
- The app checks Drive on launch, reconnect, foreground/focus and every 45 seconds while visible.
- Both devices must use the same deployed Apps Script /exec URL.
- Conflicts are still asked before replacing either full-library copy.
- The Drive Sync cloud icon indicates offline / pending / connected state.

SETUP
1. Deploy the Apps Script shown in Drive Sync as Web App (execute as Me; access Anyone).
2. Paste the /exec URL into both devices.
3. Keep the app online for the first sync on each device.
4. Test PC-to-tablet and tablet-to-PC before relying on it.

NOTES
This build retains the existing single-file HTML/PWA architecture and chapter JSON import/export. Sync currently transfers the library backup payload as a whole; it is not a granular per-keystroke merge. If the same library is edited concurrently on both devices, the app asks before choosing a copy. Verify live Apps Script deployment and Drive backup behavior with your own account.
