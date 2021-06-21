import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Adherent } from 'src/app/models/adherent/adherent.model';
import { Adresse } from 'src/app/models/adresse/adresse.model';
import { Identite } from 'src/app/models/identite/identite.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.css']
})
export class AddAdherentComponent implements OnInit {


  ngOnInit(): void {

  }


}
