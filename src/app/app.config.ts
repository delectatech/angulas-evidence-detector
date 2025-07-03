import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeng/themes/aura';  // este sí existe
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AuthInterceptor } from './auth/services/authInterceptor.service';
import { LOCALE_ID } from '@angular/core';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideAnimations(),
    MessageService,
    { provide: LOCALE_ID, useValue: 'es' },
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
};
