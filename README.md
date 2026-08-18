# Novan Telecom E-Commerce

## Deployment to Vercel

This application uses Vercel for deployment, including a Vite-based React frontend and Express serverless functions.

### Required Environment Variables

You **MUST** configure the following environment variables in your Vercel project settings (for Production, Preview, and Development environments) before the application will function correctly:

#### Frontend Variables (Firebase Client)
* `VITE_FIREBASE_API_KEY`
* `VITE_FIREBASE_AUTH_DOMAIN`
* `VITE_FIREBASE_PROJECT_ID`
* `VITE_FIREBASE_STORAGE_BUCKET`
* `VITE_FIREBASE_MESSAGING_SENDER_ID`
* `VITE_FIREBASE_APP_ID`

#### Backend Variables (Firebase Admin)
* `FIREBASE_PROJECT_ID`
* `FIREBASE_SERVICE_ACCOUNT_KEY` (Must be a valid JSON string of the Firebase Admin service account key)

*Note: The frontend variables are exposed to the browser and are safe to be public. The backend `FIREBASE_SERVICE_ACCOUNT_KEY` must NEVER be prefixed with `VITE_` or exposed to the client.*

### Local Development
Copy `.env.example` to `.env` and fill in the values above to run the app locally using `npm run dev`.
