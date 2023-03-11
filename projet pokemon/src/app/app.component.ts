import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon;

  ngOnInit(): void {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[3]);
  }

  selectPokemon(pokemonId : string){
    const id = +pokemonId;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[id].name}`);
    
  }
}
