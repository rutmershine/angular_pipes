import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestComponent } from './add-dest.component';

describe('AddDestComponent', () => {
  let component: AddDestComponent;
  let fixture: ComponentFixture<AddDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
