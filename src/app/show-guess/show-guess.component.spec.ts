import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGuessComponent } from './show-guess.component';

describe('ShowGuessComponent', () => {
  let component: ShowGuessComponent;
  let fixture: ComponentFixture<ShowGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
