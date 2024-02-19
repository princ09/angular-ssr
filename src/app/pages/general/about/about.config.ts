import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './about.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const aboutConfig: ApplicationConfig = {
  providers: [provideRouter(routes),     provideClientHydration()
  ]
};