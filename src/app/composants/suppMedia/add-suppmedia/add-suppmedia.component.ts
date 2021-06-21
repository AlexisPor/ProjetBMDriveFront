import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { SuppmediaService } from 'src/app/services/suppMedia/suppmedia.service';

@Component({
  selector: 'app-add-suppmedia',
  templateUrl: './add-suppmedia.component.html',
  styleUrls: ['./add-suppmedia.component.css']
})
export class AddSuppmediaComponent implements OnInit {

<<<<<<< Updated upstream
  suppmed : SuppMedia = new SuppMedia();

  ajouter = false;

  constructor(
    private supmediaService : SuppmediaService,
    private router : Router,
    private route : ActivatedRoute,
=======
  userForm:any;

supmed : SuppMedia = new SuppMedia();

ajouter = false;

  constructor(
    private supmedService : SuppmediaService,
    private router : Router,
>>>>>>> Stashed changes
  ) { }

  ngOnInit(): void {
    
  }

  saveSupMedia() : void {
    const data = {
      supType : this.supmed.supType,
      artCote : this.supmed.bmdArticle.artCote,
      artTitre : this.supmed.bmdArticle.artTitre,
      artAuteur : this.supmed.bmdArticle.artAuteur,
      artDateEmprunt : this.supmed.bmdArticle.artDateEmprunt,
      artDateRetour : this.supmed.bmdArticle.artDateRetour,
      
    };
    console.log(this.supmed.supType);
    
    this.supmedService.addSuppMedia(this.supmed)
    .subscribe(data => {
      console.log(data);
      this.ajouter = true;
      this.goToSupmediaList();
    },
    error =>{ console.log(error);
  });
 
}

goToSupmediaList() {
    this.router.navigate(['/list-suppmedia']);
  }

  public onSubmit() {
    console.log("Valider le formulaire");
    this.saveSupMedia();
  }

  saveSuppMeda() : void {
    const data = {
      type : this.suppmed.supType,
      titre : this.suppmed.bmdArticle.artTitre,
      auteur : this.suppmed.bmdArticle.artAuteur,
      datedemprunt : this.suppmed.bmdArticle.artDateEmprunt,
      dateretour : this.suppmed.bmdArticle.artDateRetour,
      cote : this.suppmed.bmdArticle.artCote
    };

    console.log("data = "+data);
    this.supmediaService.addSuppMedia(this.suppmed)
    .subscribe(data => {
      this.ajouter = true;
      this.goToSuppMediaList();
    },
    error => { console.log(error);
    });
  }

  goToSuppMediaList() {
    this.router.navigate(['/list-suppmedia']);
  }

  onSubmit() {
    this.saveSuppMeda();
  }

}
