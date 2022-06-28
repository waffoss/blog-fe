import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(ROUTES)
    )
  ]
});

