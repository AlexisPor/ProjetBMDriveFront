import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private urlCat: 'http://localhost:8888/catMap'

  constructor(private http: HttpClient) { }

  public findAllCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.urlCat);
  };

  public addCategorie(cat: Categorie): Observable<Categorie[]>{
    return this.http.post<Categorie[]>(this.urlCat , cat);
  };

  public updateCategorie(id: number): Observable<Object>{
    return this.http.put(this.urlCat , id);
  };

  public deleteCategorie(id: number, cat: Categorie): Observable<Object>{
    return this.http.delete(this.urlCat + id);
  };

  public findCategorieById(id: number, cat: Categorie): Observable<Categorie>{
    return this.http.get<Categorie>(this.urlCat + id + cat);
  };
}
