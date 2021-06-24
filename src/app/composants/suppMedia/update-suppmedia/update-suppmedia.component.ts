import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppMedia } from 'src/app/models/suppMedia/suppmedia.model';
import { SuppmediaService } from 'src/app/services/suppMedia/suppmedia.service';

@Component({
  selector: 'app-update-suppmedia',
  templateUrl: './update-suppmedia.component.html',
  styleUrls: ['./update-suppmedia.component.css']
})
export class UpdateSuppmediaComponent implements OnInit {

  suppMedia : SuppMedia = new SuppMedia();

  constructor(
    private suppMediaService : SuppmediaService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    let Id = this.route.snapshot.params['supId'];
    this.suppMediaService.findSuppMediaById(Id)
    .subscribe(data => {
      console.log(data);
      this.suppMedia = data;
    },
    error => console.log(error));
  }

 onSubmit() {
   this.suppMediaService.updateSuppMedia(this.suppMedia)
   .subscribe(data => {
     this.goToSuppMediaList();
   },
   error => console.log(error));
 }

 goToSuppMediaList() {
   this.router.navigate(['/list-suppmedia']);
 }
}
