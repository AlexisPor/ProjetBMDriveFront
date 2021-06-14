import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adherent } from 'src/app/models/adherent/adherent.model';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private urlAdh: 'http://localhost:8888/adhMap'

  constructor(private http: HttpClient) { }

  public findAllAdherent(): Observable<Adherent[]>{
    return this.http.get<Adherent[]>(this.urlAdh);
  };

  public addAdherent(adh: Adherent): Observable<Adherent[]>{
    return this.http.post<Adherent[]>(this.urlAdh , adh);
  };

  public updateAdherent(id: number): Observable<Object>{
    return this.http.put(this.urlAdh , id);
  };

  public deleteAdherent(id: number): Observable<Object>{
    return this.http.delete(this.urlAdh + id);
  };

  public findAdherentById(id: number): Observable<Adherent>{
    return this.http.get<Adherent>(this.urlAdh + id);
  };
}
