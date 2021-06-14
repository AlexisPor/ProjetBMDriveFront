import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private urlRes: 'http://localhost:8888/resMap'

  constructor(private http: HttpClient) { }

  public findAllReservation(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.urlRes);
  };

  public addReservation(res: Reservation): Observable<Reservation[]>{
    return this.http.post<Reservation[]>(this.urlRes , res);
  };

  public updateReservation(id: number): Observable<Object>{
    return this.http.put(this.urlRes , id);
  };

  public deleteReservation(id: number, res: Reservation): Observable<Object>{
    return this.http.delete(this.urlRes + id + res );
  };

  public findReservationById(id: number): Observable<Reservation>{
    return this.http.get<Reservation>(this.urlRes + id);
  };
}
