import { Casier } from "../casier/casier.model";

export class Reservation {

  public resId: number;
  public TCasier: Casier = new Casier();
  public resDateReservation: Date;
}
