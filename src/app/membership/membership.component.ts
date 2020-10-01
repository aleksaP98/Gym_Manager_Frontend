import { Component, OnInit } from '@angular/core';
import prices from "../../assets/data/prices.json";
 
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  prices = prices;

  constructor() { }

  ngOnInit(): void {
    
  }

}
