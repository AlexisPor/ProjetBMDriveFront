import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article/article.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  public findAllArticle(): Observable<Article[]>{
    return this.http.get<Article[]>(environment.urlArt);
  };

  public addArticle(art: Article): Observable<Article[]>{
    return this.http.post<Article[]>(environment.urlArt , art);
  };

  public updateArticle(id: number): Observable<Object>{
    return this.http.put(environment.urlArt , id);
  };

  public deleteArticle(id: number, art: Article): Observable<Object>{
    return this.http.delete(environment.urlArt + id + art);
  };

  public findArticleById(id: number, art: Article): Observable<Article>{
    return this.http.get<Article>(environment.urlArt + id + art);
  };
}
