import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: 'heroes', component: HeroesComponent   
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch:'full'
  },
  {
    path: 'detail/:id', component: HeroDetailComponent   
  },
  {
    path: 'dashboard', component: DashboardComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
