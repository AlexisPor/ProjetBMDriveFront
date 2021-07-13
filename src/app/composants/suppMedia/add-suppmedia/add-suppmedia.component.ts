import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { SuppmediaService } from 'src/app/services/suppMedia/suppmedia.service';

@Component({
  selector: 'app-add-suppmedia',
  templateUrl: './add-suppmedia.component.html',
  styleUrls: ['./add-suppmedia.component.css']
})
export class AddSuppmediaComponent implements OnInit {

  

  categ : Categorie[] = [];

  mySupMedForm : FormGroup;


  constructor(
    private supmediaService : SuppmediaService,
    private categService : CategorieService,
    private router : Router,
    private fb : FormBuilder 
  ) { }

  ngOnInit(): void {
    this.getCategorie(); 
    this.saveSuppMeda();
  }

  saveSuppMeda() {
    this.mySupMedForm = this.fb.group({
      supType : [''],
     
        catId : [''],
     
      bmdArticle : this.fb.group({
        artTitre: [''],
        artAuteur : [''],
        artCote : [''],
        artQuantite : ['']
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
    let suppmed : SuppMedia = new SuppMedia();
    suppmed.supType = dataSm.supType;
    const bmdCategorie : Categorie = new Categorie();
    bmdCategorie.catId = dataSm.catId;
    suppmed.bmdCategorie = bmdCategorie;
    suppmed.bmdArticle = dataSm.bmdArticle;
    this.supmediaService.addSuppMedia(suppmed)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/list-suppmedia']);
    })
  }

}
