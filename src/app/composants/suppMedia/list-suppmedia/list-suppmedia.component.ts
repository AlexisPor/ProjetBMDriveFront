import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article/article.model';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { SuppmediaService } from 'src/app/services/suppMedia/suppmedia.service';

@Component({
  selector: 'app-list-suppmedia',
  templateUrl: './list-suppmedia.component.html',
  styleUrls: ['./list-suppmedia.component.css']
})
export class ListSuppmediaComponent implements OnInit {

  supmed : SuppMedia[] = [];

  article : Article;

  confirmer = false;

  constructor(
    private articleService : ArticleService,
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

editSuppMedia(supId : number) {
  this.supmediaService.findSuppMediaById(supId);
  this.router.navigate(['update-suppmedia',supId]);
}

}
