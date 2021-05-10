import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-set-current-user',
  templateUrl: './set-current-user.component.html',
  styleUrls: ['./set-current-user.component.css']
})
export class SetCurrentUserComponent implements OnInit {

  userName: string = '';
  password: string = '';

  @Output() isTravel: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private currentUser: CurrentUserService) { }

  ngOnInit(): void {
  }

  checkPass(){
    this.currentUser.setCurrentUser(this.userName,this.password);
    this.isTravel.emit(this.currentUser.getIsAgent());
  }

}
