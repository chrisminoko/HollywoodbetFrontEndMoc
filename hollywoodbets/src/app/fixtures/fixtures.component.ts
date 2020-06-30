import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {BetslipService} from '../betslip.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  public Fixtures :any=[];
 
  
  constructor(private _httpclient : HttpClient ,private _betSlipService:BetslipService ) { }

  ngOnInit(): void {
     
      this._httpclient.get("assets/Bets.json").subscribe(data=>{
      console.log(data);
      this.Fixtures=data;
  
        
      })
  }

  addEventToSlip(event:string,punterchoice:string,odds:number){
    console.log('awere')
    return this._betSlipService.AddToBetSlip(event,punterchoice,odds);
  }

}
