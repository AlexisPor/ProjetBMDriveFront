import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  myCategorieForm : FormGroup

  constructor(
    private categService : CategorieService,
    private router : Router,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.saveCategorie()

  }

  saveCategorie() {
    this.myCategorieForm = this.fb.group({
      catLibelle : ['']
    })
  }

  onSubmit() {
    const dataCateg = this.myCategorieForm.value;
    let categ : Categorie = new Categorie();
    categ.catLibelle = dataCateg.catLibelle;
    this.categService.addCategorie(categ)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/list-categorie']);
    });
  }



}
