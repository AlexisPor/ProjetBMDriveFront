import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private urlArt: 'http://localhost:8888/artMap'

  constructor(private http: HttpClient) { }

  public findAllArticle(): Observable<Article[]>{
    return this.http.get<Article[]>(this.urlArt);
  };

  public addArticle(art: Article): Observable<Article[]>{
    return this.http.post<Article[]>(this.urlArt , art);
  };

  public updateArticle(id: number): Observable<Object>{
    return this.http.put(this.urlArt , id);
  };

  public deleteArticle(id: number, art: Article): Observable<Object>{
    return this.http.delete(this.urlArt + id + art);
  };

  public findArticleById(id: number, art: Article): Observable<Article>{
    return this.http.get<Article>(this.urlArt + id + art);
  };
}
