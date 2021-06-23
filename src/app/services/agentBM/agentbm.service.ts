import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agentbm } from 'src/app/models/agentBM/agentbm.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentbmService {

  constructor(private http: HttpClient) { }

  public findAllAgentBM(): Observable<Agentbm[]>{
    return this.http.get<Agentbm[]>(environment.urlAgt);
  };

  public addAgentBM(agent: Agentbm): Observable<Agentbm[]>{
    return this.http.post<Agentbm[]>(environment.urlAgt , agent);
  };

  public updateAgentBM(agent: Agentbm): Observable<Object>{
    return this.http.put(environment.urlAgt , agent);
  };

  public deleteAgentBM(abmId: number): Observable<Object>{
    return this.http.delete(environment.urlAg + abmId );
  };

  public findAgentBMById(id: number): Observable<Agentbm>{
    return this.http.get<Agentbm>(environment.urlAg + id);
  };
}
