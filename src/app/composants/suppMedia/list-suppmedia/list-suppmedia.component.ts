import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { SuppmediaService } from 'src/app/services/suppMedia/suppmedia.service';

@Component({
  selector: 'app-list-suppmedia',
  templateUrl: './list-suppmedia.component.html',
  styleUrls: ['./list-suppmedia.component.css']
})
export class ListSuppmediaComponent implements OnInit {

  supmed : SuppMedia[] = [];

  confirmer = false;

  constructor(
    private supmediaService : SuppmediaService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.findAllSuppMedia();
  }

private findAllSuppMedia() {
  this.supmediaService.findAllSuppMedia()
  .subscribe (data => {
    this.supmed = data;
  });
}

deleteSuppMedia(supId : number) {
  this.supmediaService.deleteSuppMedia(supId)
  .subscribe(data => {
    console.log(data);
    this.findAllSuppMedia();
  })
}



}
