# Devpulse (Learning Portfolio)

An Angular-based frontend application for managing pulses, developed as part of my professional development through the [Angular Real World Guide - Build Angular & Firebase Apps](https://www.udemy.com/course/angular-and-google-firebase-frontend-development/) course by Sameer Saini.

## 🌟 Purpose

This project serves as a practical implementation of modern frontend development principles using the Angular ecosystem and Google Firebase. It highlights the integration of Angular 21, Tailwind CSS, and Firebase to build a robust, scalable user experience.

## 🚀 Features

- **Post Creation:** Comprehensive feature set for creating and managing posts.
- **Component-Based Architecture:** Modular design with core, feature, and shared layers.
- **Responsive UI:** Styled with Tailwind CSS for a modern, mobile-first experience.
- **Unit Testing:** Integrated testing using the Vitest runner.
- **Firebase Integration:** Seamless connectivity with Firebase for backend services.

## 🛠️ Technologies Used

- **Angular 21.x**
- **TypeScript**
- **Tailwind CSS 4.x** (Modern utility-first CSS)
- **Vitest** (Fast unit testing runner)
- **Firebase** (Backend-as-a-Service)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (latest stable version)
- [Angular CLI](https://angular.dev/tools/cli)

## ⚙️ Configuration

1. **Firebase Setup:**
   Create a new project in the [Firebase Console](https://console.firebase.google.com/) and add a Web App to get your configuration.

2. **Application Properties:**
   Update your Firebase configuration in the appropriate environment or configuration file (e.g., `src/app/app.config.ts` or `src/environments/environment.ts`):
   ```typescript
   export const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
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
  - `features`: Business logic for specific features (e.g., posts).
  - `shared`: Reusable components, pipes, and directives.
  - `app.routes.ts`: Application routing configuration.
  - `app.config.ts`: Main application configuration and providers.
- `public`: Static assets and the application entry point.
- `src/styles.css`: Global styles including Tailwind CSS directives.

## 📖 Credits & Acknowledgements

- **Course:** [Angular & Google Firebase: Frontend Development](https://www.udemy.com/course/angular-and-google-firebase-frontend-development/)
- **Instructor:** [Sameer Saini](https://www.udemy.com/user/sameersaini/)

This repository is for educational purposes, documenting my progress and implementation of the course curriculum.
