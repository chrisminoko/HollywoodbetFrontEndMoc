import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {event} from '../event';
import { Observable } from 'rxjs';
import{bettypes} from '../bettypes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventservice:EventService,private route:ActivatedRoute , private router:Router) { }
  event :event[];
  bettypes:bettypes[];
  TournamentID:number;

  getTournaments(){
    var TournamentID =+this.route.snapshot.paramMap.get('tournamentid');
    console.log('Snapped ID',TournamentID)
    this.TournamentID=TournamentID;
    return this.eventservice.getTournamentbyID(this.TournamentID).subscribe((data:any)=>{
      console.log(data);
      this.event=data;
      console.log('event logged ', this.event);
    });
  }

  getBetTypes(){
    var TournamentID =+this.route.snapshot.paramMap.get('tournamentid');
    console.log('Tournament ID for bettypes :',TournamentID)
    this.TournamentID=TournamentID;
    return this.eventservice.getBetTypes(this.TournamentID).subscribe((data:any)=>{
      console.log(data)
      this.bettypes=data;
      console.log('BetTypes Logged : ',this.bettypes)
    })
  }
  ngOnInit(): void {
    this.getTournaments();
    this.getBetTypes();
  }


  onClick() :void{
    this.eventservice.clicked=true;
  }

  ngDoCheck():void{
    if(this.eventservice.clicked){
      this.getTournaments();
      this.getBetTypes();
      this.eventservice.clicked=false;
    }
    
  }




}
