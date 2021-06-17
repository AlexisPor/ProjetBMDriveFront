import { Article } from "../article/article.model";

export class Livre{

  public libId: number;
  public bmdArticle: Article = new Article();
  public livNbPages: number;
}
