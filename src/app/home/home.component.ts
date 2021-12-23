import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../services/resident.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resident: any[] | undefined;
  selectedResident = {id:undefined,name:undefined,age:undefined,productname:undefined,
  vaccine:undefined,date:undefined};
  constructor(private residentService:ResidentService) { }

  selectResident(resident: any){
      this.selectResident=resident
    }
  ngOnInit(): void {
    this.residentService.findAllResidents().
    then(resident=>this.resident=resident);
  }
 

}
