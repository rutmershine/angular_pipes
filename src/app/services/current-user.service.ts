import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser = {
    name: '',
    password: ''
  }

  private isAgent: boolean = false;

  private agentPassword: string = '1';
  constructor() { }

  getCurrentUser() {
    return this.currentUser;
  }

  getAgentPass(): string {
    return this.agentPassword;
  }

  setCurrentUser(newName: string, password: string) {
    this.currentUser.name = newName;
    this.currentUser.password = password;
    this.isAgent = this.agentPassword === password ? true : false;
    console.log(this.isAgent);
  }

  getIsAgent(): boolean {
    return this.isAgent;
  }
}
