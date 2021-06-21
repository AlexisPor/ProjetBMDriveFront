import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Router } from '@angular/router';
=======
import { TArticle } from 'src/app/models/article/article.model';
>>>>>>> Stashed changes
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { SuppmediaService } from 'src/app/services/suppMedia/suppmedia.service';

@Component({
  selector: 'app-list-suppmedia',
  templateUrl: './list-suppmedia.component.html',
  styleUrls: ['./list-suppmedia.component.css']
})
export class ListSuppmediaComponent implements OnInit {

  supmed : SuppMedia[] = [];

<<<<<<< Updated upstream
  constructor(
    private supmediaService : SuppmediaService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.findAllSuppMedia();
=======
  article : TArticle = new TArticle();

  constructor(private supmediaService : SuppmediaService,) { }

  ngOnInit(): void {
    this.getSupmedia();
  }

  private getSupmedia() {
    this.supmediaService.findAllSuppMedia()
    .subscribe(data => {
      this.supmed = data;
    });
>>>>>>> Stashed changes
  }

private findAllSuppMedia() {
  this.supmediaService.findAllSuppMedia()
  .subscribe (data => {
    this.supmed = data;
  });
}





}
