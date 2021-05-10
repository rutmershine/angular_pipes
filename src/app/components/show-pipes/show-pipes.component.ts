import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-pipes',
  templateUrl: './show-pipes.component.html',
  styleUrls: ['./show-pipes.component.css']
})
export class ShowPipesComponent implements OnInit {

  price: number = 20;
  code: string = 'ILS';
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
