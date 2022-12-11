import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  // Lazy loading
  {
    path: 'about',
    loadChildren: () =>
      // Will output 'about.component.ts' when navigating to /about
      import('../about/about.module').then((module) => module.AboutModule),
  },

  // Regular routing
  {
    path: 'home',
    component: HomeComponent, // Will output 'home.component.ts loaded' on app load
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
