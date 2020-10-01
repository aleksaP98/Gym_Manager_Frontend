import { GymsService } from './../services/gyms.service';
import { fade, flyInLeft, flyInTop } from './../animations';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
   fade,
   flyInLeft,
   flyInTop
  ]
})
export class HomeComponent implements OnInit {
  genders = ["Male","Female"];
  bmiForm: FormGroup;
  allowedValues = /^[0-9]*$/;
  bmiResult:string = null;
  gyms:Array<object>;
  constructor(private router: Router,private gymsService:GymsService) {
    this.gyms = this.gymsService.getGyms();
   }


  ngOnInit(){
    this.bmiForm = new FormGroup({
      'height' : new FormControl(null,[Validators.required,Validators.min(1),Validators.pattern(this.allowedValues)]),
      'weight' : new FormControl(null,[Validators.required,Validators.min(1),Validators.pattern(this.allowedValues)]),
      'age' : new FormControl(null,[Validators.required,Validators.min(1),Validators.pattern(this.allowedValues)]),
      'gender' : new FormControl(null),
    })
  }
  onSubmit(){
    this.bmiResult = (((this.bmiForm.get('weight').value) / (Math.pow(this.bmiForm.get('height').value,2))) * 10000).toFixed(3);    
  }
  onSelect(gym){
    this.router.navigate(['/gyms',gym.id])
  }
}
