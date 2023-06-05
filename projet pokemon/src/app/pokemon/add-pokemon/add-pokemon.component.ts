import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-add-pokemon",
  template: `
    <h2 class="center">Ajouter un pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [],
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
