import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconecté ('pikachu'/'pikachu')";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "Vous êtes connectés.";
    } else {
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }

  login() {
    this.message = 'Tentative de connection en cours...';
    this.auth.login(this.name,this.password)
    .subscribe((isLoggedIn: boolean)=>{
      this.setMessage();
      if(isLoggedIn){
          this.router.navigate(['/pokemons']);
      }else{
        this.password = '';
        this.router.navigate(['/login']);
      }

    })
  }

  logout() {
    this.authService.logout();
    this.message = "Vous êtes déconnecté.";
    this.router.navigate(["/login"]);
  }
}
