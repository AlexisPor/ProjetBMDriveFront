import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

<<<<<<< Updated upstream
  
  constructor() { }
=======
  FormLivre : FormGroup;

  constructor(private formBuilder : FormBuilder) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.initForm();
  }

  private  initForm() {
    this.FormLivre = this.formBuilder.group ({
      livNbPages : [''],
      TArticle : this.formBuilder.group ({
        artTitre : [''],
        artAuteur : [''],
        artDateEmprunt : [''],
        artDateRetour : ['']
      }),
    });
  }

public onSubmit() {
  const dataLivre = this.FormLivre.value;
  console.log(dataLivre);
}



}
