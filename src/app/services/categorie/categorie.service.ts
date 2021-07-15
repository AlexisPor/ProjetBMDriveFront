import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  public findAllCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(environment.urlCat);
  };

  public addCategorie(cat: Categorie): Observable<Categorie[]>{
    return this.http.post<Categorie[]>(environment.urlCat , cat);
  };

  public updateCategorie(cat: Categorie): Observable<Object>{
    return this.http.put(environment.urlCat , cat);
  };

  public deleteCategorie(id: number): Observable<Object>{
    return this.http.delete(environment.urlCat + id);
  };

  public findCategorieById(id: number): Observable<Categorie>{
    return this.http.get<Categorie>(environment.urlCat + id);
  };
}
