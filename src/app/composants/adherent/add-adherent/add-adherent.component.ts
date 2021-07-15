
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Adherent } from 'src/app/models/adherent/adherent.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.css']
})
export class AddAdherentComponent implements OnInit {

  myFormAdh: FormGroup;

  constructor(private adhService: AdherentService,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.initFormAdh();
  }

  private initFormAdh() {
    this.myFormAdh = this.fb.group({
      adhNomUtilisateur: [""],
      adhMotDePasse: [""],
      bmdIdentite: this.fb.group({
        ideNom: [""],
        idePrenom: [""],
        ideDateNaissance: [""],
        ideTelephone: [""],
        ideMail: [""],
        ideSexe: [""],
        ideJustificatifDomicile: [""],
        ideJustificatifIdentite: [""],
          bmdAdresse: this.fb.group({
            adrNumRue: [""],
            adrNomRue: [""],
            adrCplAdr: [""],
            adrCp: [""],
            adrVille: [""]

          }),
        }),
    });
  };

  public onSubmit() {
    const dataAdh = this.myFormAdh.value;

    let adherent: Adherent = new Adherent();

    adherent.bmdIdentite.bmdAdresse = dataAdh.bmdAdresse;
    adherent.bmdIdentite = dataAdh.bmdIdentite;
    adherent.adhNomUtilisateur = dataAdh.adhNomUtilisateur;
    adherent.adhMotDePasse = dataAdh.adhMotDePasse;

    this.adhService.addAdherent(adherent).subscribe(
      (response) => {
        console.log(response);
        this.route.navigate(["list-adherent"]);
      });
  };
}
