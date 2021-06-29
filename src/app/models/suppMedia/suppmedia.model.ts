import { Article } from "../article/article.model";
import { Categorie } from "../categorie/categorie.model";

export class SuppMedia {

  public supId: number;
  public bmdArticle: Article = new Article();
  public supType: string;
  public bmdCategorie: Categorie;
}
