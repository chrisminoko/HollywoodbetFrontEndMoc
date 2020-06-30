import { Component, OnInit } from '@angular/core';
import{BetslipService} from '../betslip.service';
import {Betslip} from '../betslip';
import { from } from 'rxjs';

@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.css']
})
export class BetslipComponent implements OnInit {

  constructor(private _betSlipService:BetslipService) { }
  iterm=[];
  count=0;
  message='';
  ngOnInit(): void {
  this.iterm=this._betSlipService.item;
    
  }

  remove(event:any){
    return this._betSlipService.removeEvent(event)
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.iterm=this._betSlipService.item;
    this.count=this.iterm.length;
    
  }

  clearBetSlip(){
    return this._betSlipService.clearBetSlip()
  }
  Bets:Betslip[];

}
