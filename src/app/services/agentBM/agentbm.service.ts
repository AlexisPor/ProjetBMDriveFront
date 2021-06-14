import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agentbm } from 'src/app/models/agentBM/agentbm.model';

@Injectable({
  providedIn: 'root'
})
export class AgentbmService {

  private urlAg: 'http://localhost:8888/agMap'

  constructor(private http: HttpClient) { }

  public findAllAgentBM(): Observable<Agentbm[]>{
    return this.http.get<Agentbm[]>(this.urlAg);
  };

  public addAgentBM(agent: Agentbm): Observable<Agentbm[]>{
    return this.http.post<Agentbm[]>(this.urlAg , agent);
  };

  public updateAgentBM(id: number): Observable<Object>{
    return this.http.put(this.urlAg , id);
  };

  public deleteAgentBM(id: number, agent: Agentbm): Observable<Object>{
    return this.http.delete(this.urlAg + id + agent);
  };

  public findAgentBMById(id: number): Observable<Agentbm>{
    return this.http.get<Agentbm>(this.urlAg + id);
  };
}
