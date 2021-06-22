import { Component, OnInit } from '@angular/core';
import { Agentbm } from 'src/app/models/agentBM/agentbm.model';
import { AgentbmService } from 'src/app/services/agentBM/agentbm.service';

@Component({
  selector: 'app-list-agentbm',
  templateUrl: './list-agentbm.component.html',
  styleUrls: ['./list-agentbm.component.css']
})
export class ListAgentbmComponent implements OnInit {

  newAgentBM : Agentbm[];

  constructor(private agentBMService : AgentbmService) {

   }

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
    this.agentBMService.deleteAgentBM(abmId,);
  }

}
