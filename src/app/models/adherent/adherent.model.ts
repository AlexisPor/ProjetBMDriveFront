import { Identite } from "../identite/identite.model";
import { Panier } from "../panier/panier.model";

export class Adherent {

  public adhIdLecteur: number;
  public TIdentite: Identite = new Identite();
  public TPanier: Panier = new Panier();
  public adhNomUtilisateur: string;
  public adhMotDePasse: string;



}
