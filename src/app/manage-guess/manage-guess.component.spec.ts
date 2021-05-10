import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGuessComponent } from './manage-guess.component';

describe('ManageGuessComponent', () => {
  let component: ManageGuessComponent;
  let fixture: ComponentFixture<ManageGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
