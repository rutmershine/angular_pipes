import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGuessComponent } from './user-guess.component';

describe('UserGuessComponent', () => {
  let component: UserGuessComponent;
  let fixture: ComponentFixture<UserGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
