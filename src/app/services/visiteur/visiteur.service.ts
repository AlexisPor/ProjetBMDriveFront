import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visiteur } from 'src/app/models/visiteur/visiteur.model';

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  private urlVis: 'http://localhost:8888/visMap'

  constructor(private http: HttpClient) { }

  public findAllVisiteur(): Observable<Visiteur[]>{
    return this.http.get<Visiteur[]>(this.urlVis);
  };

  public addVisiteur(vis: Visiteur): Observable<Visiteur[]>{
    return this.http.post<Visiteur[]>(this.urlVis , vis);
  };

  public updateVisiteur(id: number): Observable<Object>{
    return this.http.put(this.urlVis , id);
  };

  public deleteVisiteur(id: number): Observable<Object>{
    return this.http.delete(this.urlVis + id);
  };

  public findVisiteurById(id: number): Observable<Visiteur>{
    return this.http.get<Visiteur>(this.urlVis + id);
  };
}
