import { Voiture } from "src/model/Voiture";

export class VoitureService{
    voitures: Array<Voiture> = [new Voiture("Mercedes","Classe A"),new Voiture("Mercedes","Classe C")];

    addVoitureToList(voiture: Voiture){
        this.voitures.push(voiture);
        console.log("Voiture ajoutée: "+voiture.marque+" "+voiture.modele);
    }

    getVoitureByMarque(marque: string){
      const result = this.voitures.filter((Voiture)=>{
      return Voiture.marque == marque;
    })
      return result[0];
    }
}
