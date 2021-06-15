import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Identite } from 'src/app/models/identite/identite.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  constructor(private http: HttpClient) { }

  public findAllIdentite(): Observable<Identite[]>{
    return this.http.get<Identite[]>(environment.urlIden);
  };

  public addIdentite(ide: Identite): Observable<Identite[]>{
    return this.http.post<Identite[]>(environment.urlIden , ide);
  };

  public updateIdentite(id: number): Observable<Object>{
    return this.http.put(environment.urlIden , id);
  };

  public deleteIdentite(id: number): Observable<Object>{
    return this.http.delete(environment.urlIden + id);
  };

  public findIdentiteById(id: number): Observable<Identite>{
    return this.http.get<Identite>(environment.urlIden + id);
  };
}
