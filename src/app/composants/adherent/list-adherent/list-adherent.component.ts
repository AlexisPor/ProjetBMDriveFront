import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/models/adherent/adherent.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-list-adherent',
  templateUrl: './list-adherent.component.html',
  styleUrls: ['./list-adherent.component.css']
})
export class ListAdherentComponent implements OnInit {

  adherent: Adherent[] = [];

  constructor(private adhService: AdherentService) { }

  ngOnInit(): void {
    this.findAllAdh();
  }

  public findAllAdh() {
    this.adhService.findAllAdherent().subscribe(
      (response) => {
        this.adherent = response;
      });
  };
}
