import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article.model';
import { Panier } from 'src/app/models/panier/panier.model';
import { Reservation } from 'src/app/models/reservation/reservation.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { PanierService } from 'src/app/services/panier/panier.service';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-add-panier',
  templateUrl: './add-panier.component.html',
  styleUrls: ['./add-panier.component.css']
})
export class AddPanierComponent implements OnInit {

  newPanier = new Panier();

  message : string="";
  nbp :string="";
  listeArticles:Article[]=[]; // Un tableau d'articles
  listeReservation:Reservation[]=[]; // Un tableau de réservations

  constructor(private panierService : PanierService,
    private articleService : ArticleService , 
    private reservationService : ReservationService,
          ) {
            localStorage.setItem("nbpanier","0");

           }

  ngOnInit(): void {
    this.articleService.findAllArticle().subscribe((data)=>{
      this.listeArticles=data;
      },
    (error)=>{
     console.log(error)
        }
   );

   this.reservationService.findAllReservation().subscribe((data)=>{
    this.listeReservation=data;
  },
  (error)=>{
   console.log(error)
 }
 );

  }

  addPanier(){
  if(localStorage.getItem("nbpanier")!=null)
 this.nbp== localStorage.getItem("nbpanier")?.toString();
  let count=parseInt(this.nbp);
    localStorage.setItem("panier",""+this.newPanier.bmdArticle.artId);
     count++;
    localStorage.setItem("nbpanier",""+count);
    
    this.panierService.addPanier(this.newPanier).subscribe(
      (data)=>{
        console.log("Panier ajouté")
      }
    )
    this.message = "Panier " +this.newPanier.bmdArticle.artId + " ajouté avec succès ! ";
  }

}
