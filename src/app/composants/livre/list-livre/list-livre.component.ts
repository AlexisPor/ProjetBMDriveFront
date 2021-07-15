import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article/article.model';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { Livre } from 'src/app/models/livre/livre.model';
import { LivreService } from 'src/app/services/livre/livre.service';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {

  livre : Livre[] = [];

  article : Article;

  categ : Categorie;

  confirmer = false;

  constructor(
    private livreService : LivreService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.findAllLivre();
  }

private findAllLivre() {
  this.livreService.findAllLivre()
  .subscribe (data => {
    this.livre = data;
  });
}

deleteLivre(livId : number) {
  this.livreService.deleteLivre(livId)
  .subscribe(data => {
    console.log(data);
    this.findAllLivre();
  });
}

editLivre(livId : number) {
  this.livreService.findLivreById(livId);
  this.router.navigate(['update-livre', livId]);
}


}
