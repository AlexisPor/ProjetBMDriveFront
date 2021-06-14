import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Identite } from 'src/app/models/identite/identite.model';

@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  private urlIden: 'http://localhost:8888/ideMap'

  constructor(private http: HttpClient) { }

  public findAllIdentite(): Observable<Identite[]>{
    return this.http.get<Identite[]>(this.urlIden);
  };

  public addIdentite(ide: Identite): Observable<Identite[]>{
    return this.http.post<Identite[]>(this.urlIden , ide);
  };

  public updateIdentite(id: number): Observable<Object>{
    return this.http.put(this.urlIden , id);
  };

  public deleteIdentite(id: number): Observable<Object>{
    return this.http.delete(this.urlIden + id);
  };

  public findIdentiteById(id: number): Observable<Identite>{
    return this.http.get<Identite>(this.urlIden + id);
  };
}
