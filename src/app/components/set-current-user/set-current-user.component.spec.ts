import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCurrentUserComponent } from './set-current-user.component';

describe('SetCurrentUserComponent', () => {
  let component: SetCurrentUserComponent;
  let fixture: ComponentFixture<SetCurrentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCurrentUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
