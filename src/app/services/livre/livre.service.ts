import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/livre/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private urlLiv: 'http://localhost:8888/livMap'

  constructor(private http: HttpClient) { }

  public findAllLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.urlLiv);
  };

  public addLivre(liv: Livre): Observable<Livre[]>{
    return this.http.post<Livre[]>(this.urlLiv , liv);
  };

  public updateLivre(id: number): Observable<Object>{
    return this.http.put(this.urlLiv , id);
  };

  public deleteLivre(id: number, liv: Livre): Observable<Object>{
    return this.http.delete(this.urlLiv + id + liv);
  };

  public findLivreById(id: number, liv: Livre): Observable<Livre>{
    return this.http.get<Livre>(this.urlLiv + id + liv);
  };
}
