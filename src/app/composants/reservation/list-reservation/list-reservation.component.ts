import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/models/adherent/adherent.model';
import { Reservation } from 'src/app/models/reservation/reservation.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  reservation: Reservation[] = [];

  constructor(private resService: ReservationService) { }

  ngOnInit(): void {
    this.findAllReservation();
  }

  public findAllReservation() {
this.resService.findAllReservation().subscribe(
  (value) => {

    this.reservation = value;
  });

  }
}
