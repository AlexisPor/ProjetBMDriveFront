import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article.model';
import { Livre } from 'src/app/models/livre/livre.model';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-menu-adherent',
  templateUrl: './menu-adherent.component.html',
  styleUrls: ['./menu-adherent.component.css']
})
export class MenuAdherentComponent implements OnInit {

  artAuteur: string;
  artTitre: string;
  article: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.findAllArticle();
  }

  public searchByTitre() {
    this.articleService.searchByTitre(this.artTitre).subscribe(
      (value) =>{
        console.log(value);
        this.article=value;
      }
    )
  }

  public findAllArticle(){
    this.articleService.findAllArticle().subscribe(
      values=>{
        console.log(values);
        this.article=values;
      }
      )
  }

}
