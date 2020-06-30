import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {event} from './event';
import {bettypes} from './bettypes';
import { Observable } from 'rxjs';
import { Betslip } from './betslip';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  event : event[];
  bettypes:bettypes[];
  clicked:boolean=false;

  constructor(private _http:HttpClient) { }
  private eventur='https://localhost:5001/events?tournamentid=';
  private bettypeurl='https://localhost:5001/Bettypes?tournamentid=';

  getTournamentbyID(id:number):Observable<event[]>{
    return this._http.get<event[]>(this.eventur+id);
  }

  getBetTypes(id:number):Observable<bettypes[]>{
    return this._http.get<bettypes[]>(this.bettypeurl+id)
  }
}
