import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideSpinnerConfig } from 'ngx-spinner';
import { routes } from './app.routes';
import { globalSpinnerInterceptor } from './shared/interceptors/global-spinner/global-spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideEnvironmentNgxMask(),
    provideHttpClient(
      withInterceptors([
        globalSpinnerInterceptor,
      ]),
    ),
    provideSpinnerConfig({
      type: 'ball-clip-rotate',
    }),
  ],
};
