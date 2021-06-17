import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from 'src/app/models/panier/panier.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }

  public findAllPanier(): Observable<Panier[]>{
    return this.http.get<Panier[]>(environment.urlPan);
  };

  public addPanier(pan: Panier): Observable<Panier[]>{
    return this.http.post<Panier[]>(environment.urlPan, pan);
  };

  public updatePanier(id: number): Observable<Object>{
    return this.http.put(environment.urlPan , id);
  };

  public deletePanier(id: number, pan: Panier): Observable<Object>{
    return this.http.delete(environment.urlPan + id + Panier);
  };

  public findPanierById(id: number): Observable<Panier>{
    return this.http.get<Panier>(environment.urlPan + id);
  };
}
