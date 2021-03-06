import { HttpClientModule } from '@angular/common/http';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListAdherentComponent } from './composants/adherent/list-adherent/list-adherent.component';
import { AddAdherentComponent } from './composants/adherent/add-adherent/add-adherent.component';
import { UpdateAdherentComponent } from './composants/adherent/update-adherent/update-adherent.component';
import { AddAgentbmComponent } from './composants/agentBM/add-agentbm/add-agentbm.component';
import { ListAgentbmComponent } from './composants/agentBM/list-agentbm/list-agentbm.component';
import { UpdateAgentbmComponent } from './composants/agentBM/update-agentbm/update-agentbm.component';
import { AddCasierComponent } from './composants/casier/add-casier/add-casier.component';
import { ListCasierComponent } from './composants/casier/list-casier/list-casier.component';
import { UpdateCasierComponent } from './composants/casier/update-casier/update-casier.component';
import { AddCategorieComponent } from './composants/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './composants/categorie/list-categorie/list-categorie.component';
import { UpdateCategorieComponent } from './composants/categorie/update-categorie/update-categorie.component';
import { AddLivreComponent } from './composants/livre/add-livre/add-livre.component';
import { ListLivreComponent } from './composants/livre/list-livre/list-livre.component';
import { UpdateLivreComponent } from './composants/livre/update-livre/update-livre.component';
import { AddPanierComponent } from './composants/panier/add-panier/add-panier.component';
import { ListPanierComponent } from './composants/panier/list-panier/list-panier.component';
import { UpdatePanierComponent } from './composants/panier/update-panier/update-panier.component';
import { AddReservationComponent } from './composants/reservation/add-reservation/add-reservation.component';
import { ListReservationComponent } from './composants/reservation/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './composants/reservation/update-reservation/update-reservation.component';
import { AddSuppmediaComponent } from './composants/suppMedia/add-suppmedia/add-suppmedia.component';
import { ListSuppmediaComponent } from './composants/suppMedia/list-suppmedia/list-suppmedia.component';
import { UpdateSuppmediaComponent } from './composants/suppMedia/update-suppmedia/update-suppmedia.component';
import { AddVisiteurComponent } from './composants/visiteur/add-visiteur/add-visiteur.component';
import { ListVisiteurComponent } from './composants/visiteur/list-visiteur/list-visiteur.component';
import { UpdateVisiteurComponent } from './composants/visiteur/update-visiteur/update-visiteur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeAgentComponent } from './composants/accueilAgent/home-agent/home-agent.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuAdherentComponent } from './composants/menu-adherent/menu-adherent.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";


@NgModule({
  declarations: [
    AppComponent,
    ListAdherentComponent,
    AddAdherentComponent,
    UpdateAdherentComponent,
    AddAgentbmComponent,
    ListAgentbmComponent,
    UpdateAgentbmComponent,
    AddCasierComponent,
    ListCasierComponent,
    UpdateCasierComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    UpdateCategorieComponent,
    AddLivreComponent,
    ListLivreComponent,
    UpdateLivreComponent,
    AddPanierComponent,
    ListPanierComponent,
    UpdatePanierComponent,
    AddReservationComponent,
    ListReservationComponent,
    UpdateReservationComponent,
    AddSuppmediaComponent,
    ListSuppmediaComponent,
    UpdateSuppmediaComponent,
    AddVisiteurComponent,
    ListVisiteurComponent,
    UpdateVisiteurComponent,
    MenuComponent,
    HomeAgentComponent,
    MenuAdherentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
