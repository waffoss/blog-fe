import { Route } from "@angular/router";

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./components/homepage/homepage.component').then(c => c.HomepageComponent),
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadComponent: () => import('./components/aboutpage/aboutpage.component').then(c => c.AboutpageComponent)
      }
]