import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/model/Voiture';
import { VoitureService } from '../Service/VoitureService';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  theSelectedVoiture:Voiture=(new Voiture("",""));
  voitures: Array<Voiture>=[];
  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {  
    this.voitures = this.voitureService.voitures;
  }

  onReceivedSelectedVoiture(voiture: Voiture) {
    this.theSelectedVoiture = voiture;
  }
}
