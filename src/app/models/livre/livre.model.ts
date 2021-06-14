import { Article } from "../article/article.model";

export class Livre{

  public libId: number;
  public TArticle: Article = new Article();
  public livNbPages: number;
}
