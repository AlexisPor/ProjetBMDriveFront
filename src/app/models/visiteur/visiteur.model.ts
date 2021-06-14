import { Identite } from "../identite/identite.model";
import { Panier } from "../panier/panier.model";

export class Visiteur {

  public visIdVisiteur: number;
  public TIdentite: Identite = new Identite();
  public TPanier: Panier = new Panier();
}
