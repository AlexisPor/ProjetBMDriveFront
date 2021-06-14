import { Adresse } from "../adresse/adresse.model";

export class Identite {

  public ideIdentite: number;
  public TAdresse: Adresse = new Adresse();
  public ideNom: string;
  public idePrenom: string;
  public ideAge: number;
  public ideSexe: string;
  public ideTelephone: string;
  public ideMail: string;
}
