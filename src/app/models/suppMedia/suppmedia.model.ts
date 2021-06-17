import { Article } from "../article/article.model";

export class SuppMedia {

  public supId: number;
  public bmdArticle: Article = new Article();
  public supType: string;
  public supDuree: number;
}
