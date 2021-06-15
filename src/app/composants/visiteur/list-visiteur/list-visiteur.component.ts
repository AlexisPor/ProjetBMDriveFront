import { Component, OnInit } from '@angular/core';
import { Visiteur } from 'src/app/models/visiteur/visiteur.model';
import { VisiteurService } from 'src/app/services/visiteur/visiteur.service';
import {MatListModule} from '@angular/material/list';
import { Identite } from 'src/app/models/identite/identite.model';

@Component({
  selector: 'app-list-visiteur',
  templateUrl: './list-visiteur.component.html',
  styleUrls: ['./list-visiteur.component.css']
})

export class ListVisiteurComponent implements OnInit {

  visiteur: Visiteur[] = [];

  constructor(private visiteurServ: VisiteurService) { }

  ngOnInit(): void {
    this.findAllVisiteur();
  }

  findAllVisiteur() {
    this.visiteurServ.findAllVisiteur().subscribe(
      (response) => {
        this.visiteur=response;

      },
      (error) => {
        console.log(`error ${{error}}`);

      }
      );
  };
}
