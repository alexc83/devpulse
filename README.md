# Devpulse (Learning Portfolio)

An Angular-based frontend application for managing pulses, developed as part of my professional development through the [Angular Real World Guide - Build Angular & Firebase Apps](https://www.udemy.com/course/angular-and-google-firebase-frontend-development/) course by Sameer Saini.

## 🌟 Purpose

This project serves as a practical implementation of modern frontend development principles using the Angular ecosystem and Google Firebase. At its current stage, it focuses on building out the core workflow for creating blog posts while I work through the course.

## 🚀 Features

- **Post Creation Form:** Create a blog post with title and content fields.
- **Form Validation:** Built-in validation for required fields and content limits.
- **Markdown Preview:** Live preview while writing post content.
- **Component-Based Architecture:** Organized into core and feature areas.
- **Firebase Integration:** Posts are saved to Firestore.

## 🛠️ Technologies Used

- **Angular 21.x**
- **TypeScript**
- **Tailwind CSS 4.x**
- **Firebase** (Backend-as-a-Service)
- **ngx-markdown**

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (latest stable version)
- [Angular CLI](https://angular.dev/tools/cli)

## ⚙️ Configuration

1. **Firebase Setup:**
   Create a new project in the [Firebase Console](https://console.firebase.google.com/) and add a Web App to get your configuration.

2. **Application Properties:**
   Update your Firebase configuration in the environment files used by the app (for example, `src/environments/environment.ts` and `src/environments/environment.development.ts`):
   ```typescript
   export const environment = {
     prod: false,
     firebase: {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     }
   };
   ```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd devpulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:4200`.

## 📂 Project Structure

- `src/app`: Main application code.
  - `core`: Singleton components like the navbar.
  - `features`: Feature-specific pages and services (currently post creation).
  - `app.routes.ts`: Application routing configuration.
  - `app.config.ts`: Main application configuration and providers.
- `src/environments`: Environment-based configuration, including Firebase setup.
- `public`: Static assets such as the logo.
- `src/styles.css`: Global styles including Tailwind CSS.

## 📖 Credits & Acknowledgements

- **Course:** [Angular Real World Guide - Build Angular & Firebase Apps](https://www.udemy.com/course/angular-and-google-firebase-frontend-development/)
- **Instructor:** [Sameer Saini](https://www.udemy.com/user/sameersaini/)

This repository is for educational purposes, documenting my progress and implementation of the course curriculum.
