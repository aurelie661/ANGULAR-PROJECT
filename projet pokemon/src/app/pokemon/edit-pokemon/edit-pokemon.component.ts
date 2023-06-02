import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2>Editer {{pokemon?.name}}</h2>
    <p *ngIf="pokemon" class="center">
        <img [src]="pokemon.picture" alt="">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit{
  pokemon: Pokemon| undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ){
  }
  ngOnInit() {
      const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
      if(pokemonId){
        this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      }else{
        this.pokemon = undefined;
      }
  }
}
