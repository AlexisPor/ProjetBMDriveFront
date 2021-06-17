import { Identite } from "../identite/identite.model";
import { Reservation } from "../reservation/reservation.model";

export class Agentbm {

  public abmId: number;
  public bmdIdentite: Identite = new Identite();
  public bmdReservation: Reservation = new Reservation();
  public abmNomUtilisateur: string;
  public abmMotDePasse: string;


}
