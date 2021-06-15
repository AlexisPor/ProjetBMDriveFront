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
    return this.http.get<Agentbm[]>(environment.urlAg);
  };

  public addAgentBM(agent: Agentbm): Observable<Agentbm[]>{
    return this.http.post<Agentbm[]>(environment.urlAg , agent);
  };

  public updateAgentBM(id: number): Observable<Object>{
    return this.http.put(environment.urlAg , id);
  };

  public deleteAgentBM(id: number, agent: Agentbm): Observable<Object>{
    return this.http.delete(environment.urlAg + id + agent);
  };

  public findAgentBMById(id: number): Observable<Agentbm>{
    return this.http.get<Agentbm>(environment.urlAg + id);
  };
}
