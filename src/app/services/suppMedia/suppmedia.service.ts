import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';

@Injectable({
  providedIn: 'root'
})
export class SuppmediaService {

  private urlSm: 'http://localhost:8888/smMap'

  constructor(private http: HttpClient) { }

  public findAllSuppMedia(): Observable<SuppMedia[]>{
    return this.http.get<SuppMedia[]>(this.urlSm);
  };

  public addSuppMedia(supp: SuppMedia): Observable<SuppMedia[]>{
    return this.http.post<SuppMedia[]>(this.urlSm , supp);
  };

  public updateSuppMedia(id: number): Observable<Object>{
    return this.http.put(this.urlSm , id);
  };

  public deleteSuppMedia(id: number, supp: SuppMedia): Observable<Object>{
    return this.http.delete(this.urlSm + id + supp);
  };

  public findSuppMediaById(id: number, supp: SuppMedia): Observable<SuppMedia>{
    return this.http.get<SuppMedia>(this.urlSm + id + supp);
  };
}
