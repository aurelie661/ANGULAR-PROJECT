export class Voiture{
    marque:string;
    modele:string;
    status:boolean;

    constructor(marque:string, modele:string){
        this.marque = marque;
        this.modele = modele;
        this.status = Math.random() >0.5 ? true : false;
    }
}