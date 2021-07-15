import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { SuppmediaService } from 'src/app/services/suppMedia/suppmedia.service';

@Component({
  selector: 'app-update-suppmedia',
  templateUrl: './update-suppmedia.component.html',
  styleUrls: ['./update-suppmedia.component.css']
})
export class UpdateSuppmediaComponent implements OnInit {

  suppMed : SuppMedia;

  categ : Categorie[] = [];

  mySupMedForm : FormGroup;
  
  constructor(
    private suppmediaService : SuppmediaService,
    private categService : CategorieService,
    private route : ActivatedRoute,
    private router : Router,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    let Id = this.route.snapshot.params['supId'];

    this.suppmediaService.findSuppMediaById(Id)
    .subscribe(data => {
      console.log(data);
      this.suppMed = data;
      this.getCategorie();
      this.saveSuppMedia();
    },
    error => console.log(error));
  }

  saveSuppMedia() {
    this.mySupMedForm = this.fb.group({
      supId : [this.suppMed.supId],
      supType : [this.suppMed.supType],
      catId : [this.suppMed.bmdCategorie.catId],
     
      bmdArticle : this.fb.group({
        artTitre: [this.suppMed.bmdArticle.artTitre],
        artAuteur : [this.suppMed.bmdArticle.artAuteur],
        artCote : [this.suppMed.bmdArticle.artCote],
        artQuantite : [this.suppMed.bmdArticle.artQuantite]
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
  const dataSm = this.mySupMedForm.value;
  let bmdCategorie : Categorie = new Categorie();

  bmdCategorie.catId = dataSm.catId;

  this.suppMed.supType = dataSm.supType;
  this.suppMed.bmdArticle = dataSm.bmdArticle;
  let conf = confirm("Êtes-vous sûr de modifier?");
  if(conf){
  this.suppmediaService.updateSuppMedia(this.suppMed)
  .subscribe(data => {
    console.log(data);
    this.router.navigate(['/list-suppmedia']);
  })
  }
 }

 
 
    

}
