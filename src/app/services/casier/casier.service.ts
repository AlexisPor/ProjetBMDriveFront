import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casier } from 'src/app/models/casier/casier.model';

@Injectable({
  providedIn: 'root'
})
export class CasierService {

  private urlCas: 'http://localhost:8888/casMap'

  constructor(private http: HttpClient) { }

  public findAllCasier(): Observable<Casier[]>{
    return this.http.get<Casier[]>(this.urlCas);
  };

  public addCasier(cas: Casier): Observable<Casier[]>{
    return this.http.post<Casier[]>(this.urlCas , cas);
  };

  public updateCasier(id: number): Observable<Object>{
    return this.http.put(this.urlCas , id);
  };

  public deleteCasier(id: number, cas: Casier): Observable<Object>{
    return this.http.delete(this.urlCas + id + cas);
  };

  public findCasierById(id: number): Observable<Casier>{
    return this.http.get<Casier>(this.urlCas + id);
  };
}
