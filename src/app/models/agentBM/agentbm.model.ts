import { Identite } from "../identite/identite.model";
import { Reservation } from "../reservation/reservation.model";

export class Agentbm {

  public abmId: number;
  public TIdentite: Identite = new Identite();
  public TReservation: Reservation = new Reservation();
  public abmNomUtilisateur: string;
  public abmMotDePasse: string;


}
