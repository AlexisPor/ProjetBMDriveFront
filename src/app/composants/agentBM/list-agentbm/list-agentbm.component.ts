import { Component, OnInit } from '@angular/core';
import { Agentbm } from 'src/app/models/agentBM/agentbm.model';
import { AgentbmService } from 'src/app/services/agentBM/agentbm.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-agentbm',
  templateUrl: './list-agentbm.component.html',
  styleUrls: ['./list-agentbm.component.css']
})
export class ListAgentbmComponent implements OnInit {

  newAgentBM : Agentbm[];

  agentBM : Agentbm= new Agentbm();

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private agentBMService : AgentbmService,
              private router: Router) {}

  ngOnInit(): void {
    this.findAllAgentBM();
  }

  private findAllAgentBM() {
    this.agentBMService.findAllAgentBM().subscribe(
      (value)=>{
        this.newAgentBM=value;
      }
    )
    
  }

  deleteAgentBM(abmId : number){
    
    let conf = confirm("Êtes-vous sûr ?");
    if (conf)
    this.agentBMService.deleteAgentBM(abmId).subscribe(data => {
      console.log(data);
      this.findAllAgentBM();
    })

  }

  onTableDataChange(event:any){
    this.page = event;
    this.findAllAgentBM();
  }  

  onTableSizeChange(event:any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.findAllAgentBM();
  }  

  ajouter(){
    alert(this.router.navigate(["add-agent"]));
  }

}
