import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  
  myCategorieForm : FormGroup;

  categ = new Categorie();

  constructor(
    private categService : CategorieService,
    private router : Router,
    private fb : FormBuilder,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['catId'];
    this.categService.findCategorieById(id)
    .subscribe(data => {
      this.categ = data;
      this.saveCategorie();
    });
  }

  saveCategorie() {
    this.myCategorieForm = this.fb.group({
      catId : [this.categ.catId],
      catLibelle : [this.categ.catLibelle]
    });
  }

  onSubmit() {
    const updateCateg = this.myCategorieForm.value;
    this.categ.catLibelle = updateCateg.catLibelle;
    console.log(this.categ);
    this.categService.updateCategorie(this.categ)
    .subscribe(data => {
      this.router.navigate(['/list-categorie']);
    });

  }

}
