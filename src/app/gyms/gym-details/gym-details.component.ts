import { GymsService } from './../../services/gyms.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";




@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.css']
})
export class GymDetailsComponent implements OnInit{
  public gym:any = null;
  private gyms:Array<any>;

  constructor(
    private route: ActivatedRoute,
    private gymsService:GymsService,
    private router:Router
    ) 
  {
    this.gyms = this.gymsService.getGyms();
    
    
  }

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get("id");
    for(let item of this.gyms){
      if(item.id == id){
        this.gym = item
      }
    }
    if(this.gym == null){
      this.router.navigate(["/home"]);
    }
  }
  
  
}