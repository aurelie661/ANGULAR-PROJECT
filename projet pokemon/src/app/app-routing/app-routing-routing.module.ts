import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
  {path: '', redirectTo: 'pokemons',pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
