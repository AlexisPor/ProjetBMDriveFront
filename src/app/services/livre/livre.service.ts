import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/livre/livre.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient) { }

  public findAllLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(environment.urlLiv);
  };

  public addLivre(liv: Livre): Observable<Livre[]>{
    return this.http.post<Livre[]>(environment.urlLiv , liv);
  };

  public updateLivre(id: number): Observable<Object>{
    return this.http.put(environment.urlLiv , id);
  };

  public deleteLivre(id: number, liv: Livre): Observable<Object>{
    return this.http.delete(environment.urlLiv + id + liv);
  };

  public findLivreById(id: number, liv: Livre): Observable<Livre>{
    return this.http.get<Livre>(environment.urlLiv + id + liv);
  };
}
