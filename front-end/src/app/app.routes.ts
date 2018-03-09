import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 // Our components to route

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';

const Routes: Routes = [
  { 
    path: '', 
    redirectTo: '/app-home', 
    pathMatch: 'full' 
  },
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: 'app-profile',
    component: ProfileComponent
  },
  {
    path: 'app-search-result',
    component: SearchResultComponent
  },
   
];


@NgModule({
  imports: [
      RouterModule.forRoot(Routes)
  ],
  exports: [
      RouterModule
  ]
})
export class RoutingModule { }
