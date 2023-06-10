import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { NgModule } from '@angular/core';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [

  {path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  {path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard]},
  {path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard]},
  {path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
