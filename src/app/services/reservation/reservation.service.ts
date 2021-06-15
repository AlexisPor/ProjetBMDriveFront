import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation/reservation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public findAllReservation(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(environment.urlRes);
  };

  public addReservation(res: Reservation): Observable<Reservation[]>{
    return this.http.post<Reservation[]>(environment.urlRes , res);
  };

  public updateReservation(id: number): Observable<Object>{
    return this.http.put(environment.urlRes , id);
  };

  public deleteReservation(id: number, res: Reservation): Observable<Object>{
    return this.http.delete(environment.urlRes + id + res );
  };

  public findReservationById(id: number): Observable<Reservation>{
    return this.http.get<Reservation>(environment.urlRes + id);
  };
}
