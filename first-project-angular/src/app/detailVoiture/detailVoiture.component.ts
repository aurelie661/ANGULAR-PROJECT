import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Voiture } from "src/model/Voiture";
import { VoitureService } from "../Service/VoitureService";

@Component({
    selector: "app-detailVoiture",
    templateUrl: "./detailVoiture.component.html",
    // styleUrls: ["./detailVoiture.css"]
})
export class DetailVoitureComponent implements OnInit{

  selectedVoiture:Voiture= new Voiture("","");
    constructor(private VoitureService: VoitureService, private route: ActivatedRoute){

    }

    ngOnInit():void {
      let marque = this.route.snapshot.params['marque'];
      this.route.params.subscribe((params)=> {
        marque =params['marque'];
        this.selectedVoiture = this.VoitureService.getVoitureByMarque(marque);
      })
      this.selectedVoiture = this.VoitureService.getVoitureByMarque(marque);
    }
}
