import { Adherent } from "../adherent/adherent.model";
import { Livre } from "../livre/livre.model";
import { SuppMedia } from "../suppMedia/suppmedia.model";

export class Panier {

  public panId: number;
  public panDateEmprunt: Date;
  public panDateRetour: Date;
  public bmdAdherent: Adherent;
  public bmdSupportmedias: SuppMedia;
  public bmdLivres: Livre;
}
