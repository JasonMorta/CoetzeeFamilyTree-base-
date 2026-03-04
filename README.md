# Family Tree App Starter

A front-end-only family tree app starter built with React, React Flow, rsuite, CSS Modules, and localStorage persistence.

## Default admin login
- Username: `admin`
- Password: `family123`

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```

## Notes
- This is a local-only prototype.
- Auth is not secure and should be replaced with backend auth for production.
- Image support currently uses a URL or data URL field in the editor.
- Persistence logic is separated into `src/services/localStorageService.js` to make backend migration easier later.
