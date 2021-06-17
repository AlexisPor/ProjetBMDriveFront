import { Article } from "../article/article.model";

export class Categorie {

  public catId: number;
  public bmdArticle: Article = new Article();
  public catLibelle: string;
}
