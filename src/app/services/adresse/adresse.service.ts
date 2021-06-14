import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/models/adresse/adresse.model';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  private urlAdr: 'http://localhost:8888/adrMap'

  constructor(private http: HttpClient) { }

  public findAllAdresse(): Observable<Adresse[]>{
    return this.http.get<Adresse[]>(this.urlAdr);
  };

  public addAdresse(adr: Adresse): Observable<Adresse[]>{
    return this.http.post<Adresse[]>(this.urlAdr , adr);
  };

  public updateAdresse(id: number): Observable<Object>{
    return this.http.put(this.urlAdr , id);
  };

  public deleteAdresse(id: number): Observable<Object>{
    return this.http.delete(this.urlAdr + id);
  };

  public findAdresseById(id: number): Observable<Adresse>{
    return this.http.get<Adresse>(this.urlAdr + id);
  };
}
