import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casier } from 'src/app/models/casier/casier.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasierService {

  constructor(private http: HttpClient) { }

  public findAllCasier(): Observable<Casier[]>{
    return this.http.get<Casier[]>(environment.urlCas);
  };

  public addCasier(cas: Casier): Observable<Casier[]>{
    return this.http.post<Casier[]>(environment.urlCas , cas);
  };

  public updateCasier(id: number): Observable<Object>{
    return this.http.put(environment.urlCas , id);
  };

  public deleteCasier(id: number, cas: Casier): Observable<Object>{
    return this.http.delete(environment.urlCas + id + cas);
  };

  public findCasierById(id: number): Observable<Casier>{
    return this.http.get<Casier>(environment.urlCas + id);
  };
}
