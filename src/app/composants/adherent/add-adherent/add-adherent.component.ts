import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.css']
})
export class AddAdherentComponent implements OnInit {

  myFormAdh: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {

  }
}
