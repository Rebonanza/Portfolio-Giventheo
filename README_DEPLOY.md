# Portfolio Deployment Guide

This project is prepared for deployment to **Firebase Hosting** using **GitHub Actions**.

## Steps to Deploy

### 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository (e.g., `portfolio`).
2. Follow the instructions to push your local repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### 2. Set Up Firebase
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (e.g., `giventheo-portfolio`).
3. Enable **Hosting** in the Build menu.

### 3. Configure GitHub Secrets
To allow GitHub to deploy to Firebase, you need to add a service account key to your GitHub repository secrets:
1. Run `firebase login` if you haven't already.
2. Run `firebase init hosting:github` in your terminal. This will:
   - Authenticate with GitHub.
   - Create a service account in Firebase.
   - Automatically add the `FIREBASE_SERVICE_ACCOUNT_GIVENTHEO_PORTFOLIO` secret to your GitHub repository.
3. Alternatively, you can manually create a Service Account in GCP/Firebase Console, download the JSON key, and add it as a secret named `FIREBASE_SERVICE_ACCOUNT_GIVENTHEO_PORTFOLIO` in your GitHub Repository Settings > Secrets and variables > Actions.

### 4. Updating Project ID
In `.firebaserc`, change `"default": "giventheo-portfolio"` to your actual Firebase project ID if different.

## Automated Workflow
- **Push to `main`**: Automatically builds and deploys to the live site.
- **Pull Request**: Automatically builds and deploys to a preview URL.
