import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Agentbm } from 'src/app/models/agentBM/agentbm.model';
import { AgentbmService } from 'src/app/services/agentBM/agentbm.service';

@Component({
  selector: 'app-add-agentbm',
  templateUrl: './add-agentbm.component.html',
  styleUrls: ['./add-agentbm.component.css']
})
export class AddAgentbmComponent implements OnInit {

  myFormAgentBM : FormGroup;



  constructor(private fb: FormBuilder,
              private agentBMService:AgentbmService
    ) { }

  ngOnInit(): void {
    this.initFormAgentBM();

  }

  onSubmit(){

    const dataAgentBM=this.myFormAgentBM.value;
          let newAgentBM : Agentbm=new Agentbm();
          newAgentBM.abmNomUtilisateur=dataAgentBM.abmNomUtilisateur;
          newAgentBM.abmMotDePasse=dataAgentBM.abmMotDePasse;
         
          this.agentBMService.addAgentBM(newAgentBM).subscribe(
            (data)=>{
              console.log(newAgentBM)
            }
            
          )

  }

  initFormAgentBM(){
    this.myFormAgentBM=this.fb.group({
      abmNomUtilisateur:[""],
      abmMotDePasse:[""],
    })
  }


}
