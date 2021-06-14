import { Article } from "../article/article.model";

export class Categorie {

  public catId: number;
  public TArticle: Article = new Article();
  public carLibelle: string;
}
