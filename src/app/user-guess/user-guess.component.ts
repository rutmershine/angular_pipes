import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-guess',
  templateUrl: './user-guess.component.html',
  styleUrls: ['./user-guess.component.css']
})
export class UserGuessComponent implements OnInit {

  @Input() guessColors: string[] = [];
  @Output() newGuess: EventEmitter<string[]> = new EventEmitter<string[]>();

  userGuess: string[] = ['white', 'white', 'white', 'white'];
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectColor(option: string) {
    this.userGuess[(this.index++) % 4] = option;
  }

  sendGuess() {
    this.newGuess.emit(this.userGuess);
    this.userGuess = ['white', 'white', 'white', 'white'];
    this.index = 0;
  }

}
