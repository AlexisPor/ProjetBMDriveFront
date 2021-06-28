import { Component, OnInit } from '@angular/core';
import { Casier } from 'src/app/models/casier/casier.model';
import { CasierService } from 'src/app/services/casier/casier.service';

@Component({
  selector: 'app-list-casier',
  templateUrl: './list-casier.component.html',
  styleUrls: ['./list-casier.component.css']
})
export class ListCasierComponent implements OnInit {

  casier: Casier[] = [];
  constructor(private casierService: CasierService) { }

  ngOnInit(): void {
    this.findAllCasier();
  }

  private findAllCasier() {
    this.casierService.findAllCasier().subscribe(
      (response) => {
        this.casier = response;
      });
  };
}
