import { Injectable } from '@angular/core';
import gyms from '../../assets/data/gyms.json';

@Injectable({
  providedIn: 'root'
})
export class GymsService {
  private gyms:Array<object> = gyms;
  constructor() {
   }

  getGyms(){
    return this.gyms;
  }
}
