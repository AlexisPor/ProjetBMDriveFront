import { Identite } from "../identite/identite.model";
import { Panier } from "../panier/panier.model";

export class Adherent {

  public adhId: number;
  public bmdIdentite: Identite = new Identite();
  public bmdPanier: Panier = new Panier();
  public adhNomUtilisateur: string;
  public adhMotDePasse: string;



}
