import { Pokemon } from "./../pokemon";
import { OnInit, Input } from "@angular/core";
import { Component } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["pokemon-form.component.css"],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes("add");
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
  
  clearInput() {
    if (this.isAddForm) {
      this.pokemon.name = "";
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.pokemonService
        .addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => {
          this.router.navigate(["/pokemon", pokemon.id]);
        });
    } else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe(() => {
        this.router.navigate(["/pokemon", this.pokemon.id]);
      });
    }
  }
}
