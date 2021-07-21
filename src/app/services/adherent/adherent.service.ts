import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adherent } from 'src/app/models/adherent/adherent.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  constructor(private http: HttpClient,) { }

  public findAllAdherent(): Observable<Adherent[]>{
    return this.http.get<Adherent[]>(environment.urlAdh);
  };

  public addAdherent(adh: Adherent): Observable<Adherent[]>{
    return this.http.post<Adherent[]>(environment.urlAdh , adh);
  };

  public updateAdherent(adh: Adherent): Observable<Object>{
    return this.http.put(environment.urlAdh , adh);
  };

  public deleteAdherent(id: number): Observable<Object>{
    return this.http.delete(environment.urlAdh + id);
  };

  public findAdherentById(id: number): Observable<Adherent>{
    return this.http.get<Adherent>(environment.urlAdh + id);
  };

  public searchAdherent(ideNom: string): Observable<Adherent[]>{
    return this.http.get<Adherent[]>(environment.urlAdh +"search/"+ideNom);
  };
}
