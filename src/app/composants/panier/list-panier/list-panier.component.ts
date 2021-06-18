import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/models/panier/panier.model';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.css']
})
export class ListPanierComponent implements OnInit {



  constructor() {}

  ngOnInit(): void {

  }



}
