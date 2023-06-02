import { Pokemon } from "./../pokemon";
import { OnInit, Input } from "@angular/core";
import { Component } from "@angular/core";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styles: [],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string) : boolean {
    return this.pokemon.types.includes(type);
  }
  selectType(){}
  isTypesValid(){}
  onSubmit(){}
}
