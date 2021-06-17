import { Casier } from "../casier/casier.model";

export class Reservation {

  public resId: number;
  public bmdCasier: Casier = new Casier();
  public resDateReservation: Date;
}
