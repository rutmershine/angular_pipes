import { Injectable } from '@angular/core';
import { CurrentUserService } from './current-user.service';

const destinations = [
  'Toronto',
  'Vina',
  'London',
  'Paris',
  'Tokio'
]

@Injectable({
  providedIn: 'root'
})
export class DestManageService {

  constructor(private currentUser: CurrentUserService) { }

  private destinations = destinations;

  getDests(){
    return this.destinations;
  }

  AddDest(newDest: string){
    if(this.currentUser.getCurrentUser().password === '1'){
      this.destinations.push(newDest);
    }
  }
}
