import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from 'src/app/models/panier/panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private urlPan: 'http://localhost:8888/panMap'

  constructor(private http: HttpClient) { }

  public findAllPanier(): Observable<Panier[]>{
    return this.http.get<Panier[]>(this.urlPan);
  };

  public addPanier(pan: Panier): Observable<Panier[]>{
    return this.http.post<Panier[]>(this.urlPan , pan);
  };

  public updatePanier(id: number): Observable<Object>{
    return this.http.put(this.urlPan , id);
  };

  public deletePanier(id: number, pan: Panier): Observable<Object>{
    return this.http.delete(this.urlPan + id + Panier);
  };

  public findPanierById(id: number): Observable<Panier>{
    return this.http.get<Panier>(this.urlPan + id);
  };
}
