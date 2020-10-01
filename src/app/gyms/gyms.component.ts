import { GymsService } from './../services/gyms.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {

  gyms:Array<object>;
  currentPage:number = 1;

  
  constructor(private router: Router,private gymsService:GymsService) {
    this.gyms = this.gymsService.getGyms();
  }

  ngOnInit() {
  }
  onSelect(gym){
    this.router.navigate(['/gyms',gym.id])
  }
}
