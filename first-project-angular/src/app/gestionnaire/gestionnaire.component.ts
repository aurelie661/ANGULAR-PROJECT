import { Component, EventEmitter, Output } from "@angular/core";
import { Voiture } from "../../model/Voiture";
import { VoitureService } from "../Service/VoitureService";

@Component({
    selector:"app-gestionnaire",
    templateUrl:"./gestionnaire.component.html",
    styleUrls : ['./gestionnaire.component.css']
    
})
export class GestionnaireComponent{
    newMarque: string="";
    newModele: string= "";

    // moyen classqie d'injection (sans private)
  // voitureService:VoitureService;
  constructor(private voitureService:VoitureService){
    // this.voitureService = voitureService;
  }

    @Output()
    // addedVoiture:EventEmitter<Voiture> = new EventEmitter();

    ajouterVoiture(){
        let voiture = new Voiture(this.newMarque, this.newModele);
        // this.addedVoiture.emit(voiture);
        console.log("Voiture ajoutée: "+this.newMarque+" "+this.newModele);
    }
}