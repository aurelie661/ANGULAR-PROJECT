import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  auth: AuthService;
  message: string;

  constructor(private router: Router, private pokemonService: PokemonService,private authService: AuthService) {}

  ngOnInit() {
    this.auth = this.authService;
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
  
  logout() {
    this.authService.logout();
    this.message = "Vous êtes déconnecté.";
    this.router.navigate(["/login"]);
  }
}
