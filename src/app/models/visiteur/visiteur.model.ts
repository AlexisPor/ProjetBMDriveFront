import { Identite } from "../identite/identite.model";
import { Panier } from "../panier/panier.model";

export class Visiteur {

  public visIdVisiteur: number;
  public bmdIdentite: Identite = new Identite();
  public bmdPanier: Panier = new Panier();
}
