import { Component, Input, Output } from "@angular/core";
import { Voiture } from "src/model/Voiture";

@Component({
    selector :'app-voiture',
    templateUrl : 'voiture.component.html',
    styleUrls : ['./voiture.component.css']
})
export class VoitureComponent{


    @Input()
    theVoiture: Voiture = new Voiture("","");

    detailVehicul(){

    }
    
}