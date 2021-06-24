
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adherent } from 'src/app/models/adherent/adherent.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-update-adherent',
  templateUrl: './update-adherent.component.html',
  styleUrls: ['./update-adherent.component.css']
})
export class UpdateAdherentComponent implements OnInit {

  updateMyFormAdh: FormGroup;
  adh: Adherent;

  constructor(private route: ActivatedRoute,
              private adhService: AdherentService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.adhService.findAdherentById(id).subscribe(
      (response)=>{
        this.adh = response;
        this.initFormUpdateAdh();
      });
  }
  private initFormUpdateAdh() {
    this.updateMyFormAdh = this.fb.group({
      adhId:[this.adh.adhId],
      adhNomUtilisateur: [this.adh.adhNomUtilisateur],
      adhMotDePasse: [this.adh.adhMotDePasse],
      bmdIdentite: this.fb.group({
        ideNom: [this.adh.bmdIdentite.ideNom],
        idePrenom: [this.adh.bmdIdentite.idePrenom],
        ideAge: [this.adh.bmdIdentite.ideAge],
        ideTelephone: [this.adh.bmdIdentite.ideTelephone],
        ideMail: [this.adh.bmdIdentite.ideMail],
        ideSexe: [this.adh.bmdIdentite.ideSexe],
          bmdAdresse: this.fb.group({
            adrNumRue: [this.adh.bmdIdentite.bmdAdresse.adrNumRue],
            adrNomRue: [this.adh.bmdIdentite.bmdAdresse.adrNomRue],
            adrCplAdr: [this.adh.bmdIdentite.bmdAdresse.adrCplAdr],
            adrCp: [this.adh.bmdIdentite.bmdAdresse.adrCp],
            adrVille: [this.adh.bmdIdentite.bmdAdresse.adrVille]

          }),
        }),
    });
  };

  public onSubmit() {

  const updateAdh = this.updateMyFormAdh.value;

  this.adh.adhNomUtilisateur = updateAdh.adhNomUtilisateur;
  this.adh.adhMotDePasse = updateAdh.adhMotDePasse;
  this.adh.bmdIdentite = updateAdh.bmdIdentite;
  this.adh.bmdIdentite.bmdAdresse = updateAdh.bmdIdentite.bmdAdresse;
  console.log(this.adh);
  this.adhService.updateAdherent(this.adh).subscribe(
    (value) =>{
      console.log("Adherent modifié");

      this.router.navigate(["list-adherent"]);
    });
  };

}
