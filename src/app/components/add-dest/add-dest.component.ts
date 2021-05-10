import { Component, OnInit } from '@angular/core';
import { DestManageService } from 'src/app/services/dest-manage.service';

@Component({
  selector: 'app-add-dest',
  templateUrl: './add-dest.component.html',
  styleUrls: ['./add-dest.component.css']
})
export class AddDestComponent implements OnInit {

  newDest: string = '';
  dests: string[];

  constructor(private destManage: DestManageService) { 
    this.dests = destManage.getDests();
  }

  ngOnInit(): void {
  }

  addDest(){
    if(this.newDest){
      this.destManage.AddDest(this.newDest);
      this.newDest = '';
    }
  }
  

}
