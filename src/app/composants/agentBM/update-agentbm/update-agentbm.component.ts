import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agentbm } from 'src/app/models/agentBM/agentbm.model';
import { AgentbmService } from 'src/app/services/agentBM/agentbm.service';

@Component({
  selector: 'app-update-agentbm',
  templateUrl: './update-agentbm.component.html',
  styleUrls: ['./update-agentbm.component.css']
})
export class UpdateAgentbmComponent implements OnInit {

  currentAgentBM = new Agentbm();

  agentBM : Agentbm= new Agentbm();

  constructor(private activactedRoute: ActivatedRoute,
              private router: Router,
              private agentBMService: AgentbmService) { }

  ngOnInit(): void {
    let id=this.activactedRoute.snapshot.params["abmId"];
    this.agentBMService.findAgentBMById(id).subscribe((response)=>{
    this.currentAgentBM=response;
    });
  }

  updateAgentBM(){
    this.agentBMService.updateAgentBM(this.currentAgentBM).subscribe(data => {
      console.log("Agent add");
      this.router.navigate(["/list-agent"]);
    })
  }

}
