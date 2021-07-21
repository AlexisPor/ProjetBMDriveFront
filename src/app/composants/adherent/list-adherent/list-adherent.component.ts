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

  ideNom : string;

  constructor(private adhService: AdherentService) { }

  ngOnInit(): void {
    this.findAllAdh();
  }

  public findAllAdh() {
    this.adhService.findAllAdherent().subscribe(
      (response) => {
        this.adherent = response;
      });
  }

  public onSubmit(id: number) {
    this.adhService.deleteAdherent(id).subscribe(
      (value) => {
        console.log("Adherent supprimé");
        this.findAllAdh();
      });
  };

  public onSearchAdherent() {
    this.adhService.searchAdherent(this.ideNom)
    .subscribe(data => {
      this.adherent = data;
    });
  }
  
}
