import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { Livre } from 'src/app/models/livre/livre.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { LivreService } from 'src/app/services/livre/livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {

  livre : Livre;

  categ : Categorie[] = [];

  myLivreForm : FormGroup;
  
  constructor(
    private livreService : LivreService,
    private categService : CategorieService,
    private route : ActivatedRoute,
    private router : Router,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    let Id = this.route.snapshot.params['livId'];

    this.livreService.findLivreById(Id)
    .subscribe(data => {
      console.log(data);
      this.livre = data;
      this.getCategorie();
      this.saveLivre();
    },
    error => console.log(error));
  }

  saveLivre() {
    this.myLivreForm = this.fb.group({
      livId : [this.livre.livId],
      catId : [this.livre.bmdCategorie.catId],
     
      bmdArticle : this.fb.group({
        artTitre: [this.livre.bmdArticle.artTitre],
        artAuteur : [this.livre.bmdArticle.artAuteur],
        artCote : [this.livre.bmdArticle.artCote],
        artQuantite : [this.livre.bmdArticle.artQuantite]
      }),
    })
  }
  
  getCategorie() {
    this.categService.findAllCategorie()
    .subscribe(data => {
      console.log(data);
      this.categ = data;
    });
  }

 onSubmit() {
  const dataSm = this.myLivreForm.value;
  let bmdCategorie : Categorie = new Categorie();

  bmdCategorie.catId = dataSm.catId;

  this.livre.bmdArticle = dataSm.bmdArticle;
  let conf = confirm("Êtes-vous sûr de modifier?");
  if(conf){
  this.livreService.updateLivre(this.livre)
  .subscribe(data => {
    console.log(data);
    this.router.navigate(['/list-livre']);
  })
  }
 }


}
