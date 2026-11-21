


GOOGLE DRIVE API SYNC (v10)
---------------------------
This version replaces the Google Apps Script Web App with direct Google Drive API v3 access.
1. In Google Cloud Console, select/create a project and enable Google Drive API.
2. Configure the OAuth consent screen. If the app is in Testing, add the Google account used for sync as a test user.
3. Create an OAuth Client ID for a Web application.
4. Add the exact GitHub Pages origin (for example https://YOUR-USERNAME.github.io) to Authorized JavaScript origins.
5. Paste the OAuth Client ID into the app's Google Drive Sync panel and click Connect Google Account.
6. Use Sync / Backup Now on the first device. On the second device, enter the same Client ID, connect the same Google account, then choose Restore Latest.
The app requests the drive.file scope and creates a NEET BioNotes folder with a latest backup and dated snapshots.
Access tokens are held in memory and are not saved in LocalStorage or IndexedDB.
Existing Apps Script backups are not deleted or automatically imported. Export/restore any old backup manually if needed.
