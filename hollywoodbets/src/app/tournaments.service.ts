import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tournaments} from '../app/tournaments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  constructor(private _htttp: HttpClient) { }
  tournaments :tournaments[];
  private tournamenturl='https://localhost:5001/sporttournament?';
  private _sportID='sportid=';
  private _countryid='countryid=';

  getTournaments(sportid:number, countryid:number):Observable<tournaments[]>{
    return this._htttp.get<tournaments[]>(`${this.tournamenturl}${this._sportID}${sportid}&${this._countryid}${countryid}`);
  }
}