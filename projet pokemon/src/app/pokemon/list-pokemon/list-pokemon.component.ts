import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList : Pokemon[] = POKEMONS;

  constructor(private router: Router){ }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
