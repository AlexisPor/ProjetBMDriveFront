import { Article } from "../article/article.model";
import { Categorie } from "../categorie/categorie.model";

export class Livre{

  public livId: number;
  public bmdArticle: Article = new Article();
  public bmdCategorie: Categorie = new Categorie();
}
