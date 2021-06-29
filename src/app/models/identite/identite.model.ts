import { Adresse } from "../adresse/adresse.model";

export class Identite {

  public ideId: number;
  public bmdAdresse: Adresse = new Adresse();
  public ideNom: string;
  public idePrenom: string;
  public ideDateNaissance: Date;
  public ideSexe: string;
  public ideTelephone: string;
  public ideMail: string;
  public ideJustificatifIdentite: string;
  public ideJustificatifDomicile: string;
}
