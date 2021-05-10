import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-guess',
  templateUrl: './show-guess.component.html',
  styleUrls: ['./show-guess.component.css']
})
export class ShowGuessComponent implements OnInit {

  @Input('colorsArray') guessColors: string[] = [];
  @Input() results: number[]=[];
  // [bool: string, pgia: string] = ['',''];
  arr_results: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
