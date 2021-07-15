import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { Livre } from 'src/app/models/livre/livre.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { LivreService } from 'src/app/services/livre/livre.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

  
  categ : Categorie[] = [];

  myLivreForm : FormGroup;


  constructor(
    private livreService : LivreService,
    private categService : CategorieService,
    private router : Router,
    private fb : FormBuilder 
  ) { }

  ngOnInit(): void {
    this.getCategorie(); 
    this.saveSuppMeda();
  }

  saveSuppMeda() {
    this.myLivreForm = this.fb.group({
      
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
    const dataliv = this.myLivreForm.value;
    let livre : Livre = new Livre();
    const bmdCategorie : Categorie = new Categorie();
    bmdCategorie.catId = dataliv.catId;
    livre.bmdCategorie = bmdCategorie;
    livre.bmdArticle = dataliv.bmdArticle;
    this.livreService.addLivre(livre)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/list-livre']);
    });
  }

}
