import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';
import {countries} from '../countries';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
 countries : countries [];
 sportId:number;
 
 constructor(private _countriesservice:CountriesService,private route:ActivatedRoute , private router:Router) { }

  getCountries(){
    var sportId =+this.route.snapshot.paramMap.get('sportId');
    this.sportId=sportId;
    return this._countriesservice.getCountrybyID(this.sportId).subscribe((data:any)=>{
      console.log(data);
      this.countries=data;
      console.log('countries logged', this.countries);
    });
  }
  onClick() :void{
    this._countriesservice.clicked=true;
  }

  ngOnInit(): void {
 
    this.getCountries();
  }
  ngDoCheck():void{
    if(this._countriesservice.clicked){
      this.getCountries();
      this._countriesservice.clicked=false;
    }
    
  }
  selectedCountry(countryId:number){
    this.router.navigateByUrl('tournaments'+"/"+this.sportId+"/"+countryId);
  }


}
