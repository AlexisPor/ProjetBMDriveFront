import { Article } from "../article/article.model";
import { Reservation } from "../reservation/reservation.model";

export class Panier {

  public panId: number;
  public TArticle: Article= new Article();
  public TReservation: Reservation = new Reservation();
}
