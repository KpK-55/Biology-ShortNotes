NEET BioNotes — Phase 7: Device-aware Chapter Sync

WHAT THIS VERSION DOES
- Keeps the existing standalone HTML/PWA and IndexedDB local-first storage.
- Gives each browser installation a persistent device ID (TAB-... or PC-...).
- Uploads changed chapters automatically when online and Auto-Sync is enabled.
- Checks Google Drive on app launch, reconnect, foreground return, and periodically.
- Shows when another device has chapter updates waiting.
- Downloads remote chapters only when you choose Check Drive / Download changes.
- Merges changes to different chapters independently.
- If the same chapter changed on both devices, asks which copy to keep. The replaced cloud copy is backed up by Apps Script; local recovery snapshots are also created.
- Creates a dated Drive snapshot before each existing chapter is replaced.

IMPORTANT BACKUP / MIGRATION
1. Before deployment, use Backup All (.json) separately on the tablet and PC. Keep both files.
2. Deploy the new index.html and service-worker.js, retaining manifest.json and icons/.
3. Open Drive Sync and copy the NEW Apps Script code shown in the setup panel.
4. In script.google.com, replace the entire old Code.gs with the new code, Save, then Deploy > Manage deployments > Edit (pencil) > New version > Deploy.
5. Keep the same Web App URL ending /exec and ensure Execute as: Me, Who has access: Anyone.
6. Paste the same URL on both devices. Keep Auto-Sync enabled.
7. First open the tablet, let it upload/check. Then open the PC and use Check Drive / Download changes if the app reports remote chapters.

HOW NORMAL USE WORKS
- Editing saves locally first.
- When online, local changed chapters upload automatically.
- A second device checks the cloud and shows a pending-changes notice.
- Select Check Drive / Download changes to receive remote chapters.
- Do not use old Push Backup / Pull Restore instructions; those controls are replaced by chapter sync.

DEVICE ID
The device ID is stored in that browser's localStorage. Clearing browser/site data or reinstalling the PWA storage may create a new ID. Do not clear site data casually.

LIMITATIONS / TESTING
- This version uses per-chapter revisions. Edits to different chapters can sync independently.
- Simultaneous/offline edits to the same chapter require a choice; both versions are protected by local recovery and Drive backup.
- The Apps Script endpoint is accessible to anyone who has its URL. Keep the URL private; do not post it publicly.
- Google Apps Script and Drive quotas/network conditions can delay uploads. Offline edits remain local and are retried when online.
- Test with a temporary chapter before relying on this for important study notes. Confirm images, diagrams, and large chapters sync correctly.
