import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import posthog from 'posthog-js';
import { environment } from './environments/environment';

if (environment.enableTracking) {
  posthog.init('phc_O0C2huZbcBSsCpvSiwV6dkxtT72BMo7aoUJc2qJIVfV', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
  });
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
