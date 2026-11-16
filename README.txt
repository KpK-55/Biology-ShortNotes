NEET BioNotes – Apps Script Only Sync (Phase 5)

1. Upload all files from this folder to the root of your existing GitHub Pages repository.
2. Keep manifest.json, service-worker.js and icons/ in the same relative locations.
3. Open the deployed app and open Google Drive Sync.
4. Expand Setup Google Drive sync. Copy the complete Apps Script code.
5. Create a new Apps Script project, paste the code into Code.gs and save.
6. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
7. Copy the /exec URL into NEET BioNotes on each device.
8. Test Sync Now on one device, then enter the same URL on the second device and Sync Now.
9. Only enable Auto-Sync after successful manual sync on both devices.

Conflict policy: ask before resolving. Choosing Drive restores the remote copy after creating a local recovery snapshot. Choosing local uploads the local copy; Apps Script creates a dated Drive backup before replacement.

Security: the deployed URL is effectively a secret. Anyone who obtains it may be able to access or alter the sync data. Do not publish it or share it. For stronger protection, add an authentication secret to the Apps Script before deploying.

Important: Apps Script deployment and real Google Drive permissions must be tested using your own Google account. The code has been syntax-checked locally, but this environment cannot verify your Google deployment.
