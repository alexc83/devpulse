import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'dev-pulse-development-5dd60',
        appId: '1:542274668231:web:da11196e29bae1d73a20e2',
        storageBucket: 'dev-pulse-development-5dd60.firebasestorage.app',
        apiKey: 'AIzaSyA_8mtHYBvB1pqwexsg4bolsgHk3_d2LjI',
        authDomain: 'dev-pulse-development-5dd60.firebaseapp.com',
        messagingSenderId: '542274668231',
        projectNumber: '542274668231',
        version: '2',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
