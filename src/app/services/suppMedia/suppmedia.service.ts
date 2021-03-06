import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppmediaService {

  constructor(private http: HttpClient) { }

  public findAllSuppMedia(): Observable<SuppMedia[]>{
    return this.http.get<SuppMedia[]>(environment.urlSm);
  };

  public addSuppMedia(supp: SuppMedia): Observable<SuppMedia[]>{
    return this.http.post<SuppMedia[]>(environment.urlSm , supp);
  };

  public updateSuppMedia( supp: SuppMedia): Observable<Object>{
    return this.http.put(environment.urlSm , supp);
  };

  public deleteSuppMedia(id: number): Observable<Object>{
    return this.http.delete(environment.urlSm + id);
  };

  public findSuppMediaById(id: number): Observable<SuppMedia>{
    return this.http.get<SuppMedia>(environment.urlSm + id);
  };
}
