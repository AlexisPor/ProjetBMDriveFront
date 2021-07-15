import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  newCategorie : Categorie[];

  constructor( private categorieService : CategorieService) { }

  ngOnInit(): void {
    this.findAllCategorie();
  }

  public findAllCategorie() {

    this.categorieService.findAllCategorie().subscribe(
      (value)=>{
        this.newCategorie=value;
      }
    )
    
  }

}
