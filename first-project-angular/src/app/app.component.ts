import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/model/Voiture';
import { VoitureService } from './Service/VoitureService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "ASTRA")];
  voitures: Array<Voiture> = [];
  theSelectedVoiture: Voiture = new Voiture("", "");

  constructor(private voitureService: VoitureService) {
    // this.voitureService = voitureService;
  }

  ngOnInit() {

  }

  // addVoitureToList(voitureEvent: Voiture){
  //   this.voitures.push(voitureEvent);
  // }

  
}
