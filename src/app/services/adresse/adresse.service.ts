import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/models/adresse/adresse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http: HttpClient) { }

  public findAllAdresse(): Observable<Adresse[]>{
    return this.http.get<Adresse[]>(environment.urlAdr);
  };

  public addAdresse(adr: Adresse): Observable<Adresse[]>{
    return this.http.post<Adresse[]>(environment.urlAdr , adr);
  };

  public updateAdresse(id: number): Observable<Object>{
    return this.http.put(environment.urlAdr , id);
  };

  public deleteAdresse(id: number): Observable<Object>{
    return this.http.delete(environment.urlAdr + id);
  };

  public findAdresseById(id: number): Observable<Adresse>{
    return this.http.get<Adresse>(environment.urlAdr + id);
  };
}
