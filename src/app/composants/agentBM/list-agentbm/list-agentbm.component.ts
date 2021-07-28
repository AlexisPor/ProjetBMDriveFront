import { Component, OnInit } from '@angular/core';
import { Agentbm } from 'src/app/models/agentBM/agentbm.model';
import { AgentbmService } from 'src/app/services/agentBM/agentbm.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-list-agentbm',
  templateUrl: './list-agentbm.component.html',
  styleUrls: ['./list-agentbm.component.css']
})
export class ListAgentbmComponent implements OnInit {

  myFormAgentBM : FormGroup;
  
  newAgentBM : Agentbm[];

  agentBM : Agentbm= new Agentbm();

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private fb: FormBuilder,
              private agentBMService : AgentbmService,
              private router: Router) {}

  ngOnInit(): void {
    this.initFormAgentBM();
    this.findAllAgentBM();
  }

  onSubmit(){
    const dataAgentBM=this.myFormAgentBM.value;
    let newAgentBM : Agentbm=new Agentbm();
    newAgentBM.abmNomUtilisateur=dataAgentBM.abmNomUtilisateur
    newAgentBM.abmMotDePasse=dataAgentBM.abmMotDePasse;
    this.agentBMService.addAgentBM(newAgentBM).subscribe(
      (data)=>{
      });
      $('.modal-content').html('');
      $('#myModal').on('hidden.bs.modal', function () {
      window.location.reload(true);
      });
      $('#myModal').modal('hide');
      $('#myModal').modal('dispose');
  };

  initFormAgentBM(){
    this.myFormAgentBM=this.fb.group({
      abmNomUtilisateur:[""],
      abmMotDePasse:[""],
    });
  };

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

}
