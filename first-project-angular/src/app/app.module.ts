import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailVoitureComponent } from './detailVoiture/detailVoiture.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { VoitureComponent } from './garage/voiture/voiture.component';
import { GarageComponent } from './garage/garage.component';
import { RouterModule, Routes } from '@angular/router';
import { VoitureService } from './Service/VoitureService';

const ROUTES: Routes = [
  { path: "", component: GarageComponent },
  { path: "voitures/:marque", component: DetailVoitureComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    GestionnaireComponent,
    DetailVoitureComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
