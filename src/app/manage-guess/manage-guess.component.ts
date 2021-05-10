import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-manage-guess',
  templateUrl: './manage-guess.component.html',
  styleUrls: ['./manage-guess.component.css']
})
export class ManageGuessComponent implements OnInit, OnChanges {

  @Input() guessColors: string[] = [];
  @Input() userGuessesArray: string[] = [];

  @Output() guessResults: EventEmitter<number[]> = new EventEmitter<number[]>();

  selectedColors: string[] = ['', '', '', ''];

  goodGuesses: number = 0;
  notBoolGuesses: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userGuessesArray)
    this.generateRandom();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userGuessesArray) {
      this.checkResults();
    }
  }

  generateRandom() {
    this.selectedColors = this.selectedColors.map(select => {
      const randomIndex = Math.floor(Math.random() * this.guessColors.length);
      select = this.guessColors[randomIndex];
      return select;
    });
    console.log("selectedColors: ", this.selectedColors);
  }

  checkResults() {
    const selectedColors_copy = this.selectedColors.slice(); // עותק למערך הצבעים שהוגרלו בשביל לסמן צבעים שנוחשו נכון

    this.userGuessesArray.forEach((guess, index) => {

      if (selectedColors_copy[index] == guess) {
        this.goodGuesses++;
        selectedColors_copy[index] = '';
      }
      else {
        let temp = selectedColors_copy.indexOf(guess);
        if (temp != -1) {
          this.notBoolGuesses++;
          selectedColors_copy[temp] = '';
        }
      }
    });
    if (this.goodGuesses == 4) {
      alert('you winnnnn');
    }
    console.log("goodGuesses: ", this.goodGuesses);
    this.guessResults.emit([this.goodGuesses,this.notBoolGuesses]);
    this.goodGuesses = 0;
    this.notBoolGuesses = 0;
  }

}
