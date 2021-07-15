import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  newCategorie : Categorie[];

  constructor( 
    private categorieService : CategorieService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.findAllCategorie();
  }

  public findAllCategorie() {

    this.categorieService.findAllCategorie().subscribe(
      (value)=>{
        this.newCategorie=value;
      });  
  }

  public deleteCategorie(catId : number) {
    this.categorieService.deleteCategorie(catId)
    .subscribe(data => {
      console.log(data);
      this.findAllCategorie();
    });
  }

  public editCategorie(catId : number) {
    this.categorieService.findCategorieById(catId);
    this.router.navigate(['update-categorie', catId]);
  }

}
