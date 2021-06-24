import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdherentComponent } from './composants/adherent/add-adherent/add-adherent.component';
import { ListAdherentComponent } from './composants/adherent/list-adherent/list-adherent.component';
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
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [

  {path: "add-adherent", component: AddAdherentComponent },
  {path: "list-adherent", component: ListAdherentComponent },
  {path: "update-adherent/:id", component: UpdateAdherentComponent },

  {path: "add-agent", component: AddAgentbmComponent },
  {path: "list-agent", component: ListAgentbmComponent },
  {path: "update-agent/:abmId", component: UpdateAgentbmComponent },

  {path: "add-casier", component: AddCasierComponent },
  {path: "list-casier", component: ListCasierComponent },
  {path: "update-casier", component: UpdateCasierComponent },

  {path: "add-categorie", component: AddCategorieComponent },
  {path: "list-categorie", component: ListCategorieComponent },
  {path: "update-categorie", component: UpdateCategorieComponent },

  {path: "add-livre", component: AddLivreComponent },
  {path: "list-livre", component: ListLivreComponent },
  {path: "update-livre", component: UpdateLivreComponent },

  {path: "add-panier", component: AddPanierComponent },
  {path: "list-panier", component: ListPanierComponent },
  {path: "update-panier", component: UpdatePanierComponent },

  {path: "add-reservation", component: AddReservationComponent },
  {path: "list-reservation", component: ListReservationComponent },
  {path: "update-reservation", component: UpdateReservationComponent },

  {path: "add-suppmedia", component: AddSuppmediaComponent },
  {path: "list-suppmedia", component: ListSuppmediaComponent },
  {path: "update-suppmedia/:supId", component: UpdateSuppmediaComponent },

  {path: "add-visiteur", component: AddVisiteurComponent },
  {path: "list-visiteur", component: ListVisiteurComponent },
  {path: "update-visiteur", component: UpdateVisiteurComponent },

  {path: "menu", component: MenuComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
