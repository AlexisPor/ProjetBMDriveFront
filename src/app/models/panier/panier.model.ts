import { Article } from "../article/article.model";
import { Reservation } from "../reservation/reservation.model";

export class Panier {

  public panId: number;
  public bmdArticle: Article= new Article();
  public bmdReservation: Reservation = new Reservation();
}
