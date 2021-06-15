import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visiteur } from 'src/app/models/visiteur/visiteur.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  constructor(private http: HttpClient) { }

  public findAllVisiteur(): Observable<Visiteur[]>{
    return this.http.get<Visiteur[]>(environment.urlVis);
  };

  public addVisiteur(vis: Visiteur): Observable<Visiteur[]>{
    return this.http.post<Visiteur[]>(environment.urlVis , vis);
  };

  public updateVisiteur(id: number): Observable<Object>{
    return this.http.put(environment.urlVis , id);
  };

  public deleteVisiteur(id: number): Observable<Object>{
    return this.http.delete(environment.urlVis + id);
  };

  public findVisiteurById(id: number): Observable<Visiteur>{
    return this.http.get<Visiteur>(environment.urlVis + id);
  };
}
