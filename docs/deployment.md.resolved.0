# Deployment Guide

## 1. Database (MySQL)
**Recommended Provider**: Railway or PlanetScale.

### Steps:
1.  Create a new MySQL service on Railway/PlanetScale.
2.  Copy the `DATABASE_URL` (e.g., `mysql://user:pass@host:port/db`).
3.  Add this URL to your Backend Environment Variables.

## 2. Backend (Node.js/Express)
**Recommended Provider**: Render.

### Steps:
1.  Push your code to GitHub.
2.  Create a new **Web Service** on Render.
3.  Connect your GitHub repository.
4.  **Build Command**: `npm install && npx prisma generate && npm run build`
5.  **Start Command**: `npm start`
6.  **Environment Variables**:
    *   `DATABASE_URL`: (From Step 1)
    *   `JWT_SECRET`: (Generate a strong random string)
    *   `CLOUDINARY_URL`: (If using Cloudinary for uploads)
    *   `NODE_ENV`: `production`

## 3. Frontend (React)
**Recommended Provider**: Vercel.

### Steps:
1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  **Build Command**: `npm run build` (Vite default)
4.  **Output Directory**: `dist`
5.  **Environment Variables**:
    *   `VITE_API_URL`: (The URL of your deployed Backend from Step 2, e.g., `https://my-api.onrender.com`)

## 4. Mobile (React Native - Optional)
**Recommended Provider**: Expo EAS.

### Steps:
1.  Install EAS CLI: `npm install -g eas-cli`
2.  Login: `eas login`
3.  Configure: `eas build:configure`
4.  Build for Android: `eas build -p android --profile preview`
5.  Download the `.apk` file and install on device.

## 5. Verification
- Visit the Frontend URL.
- Try to Login as Admin.
- Verify that the Backend API is reachable.
