import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { Composant1Component } from './composant1/composant1.component';
import { Composant2Component } from './composant2/composant2.component';

const router: Routes = [
  { path: 'compo1',  component: Composant1Component },
  { path: 'compo2', component: Composant2Component },
  { path: '**', redirectTo: '/compo1',  pathMatch: 'full'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
