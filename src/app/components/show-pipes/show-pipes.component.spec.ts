import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPipesComponent } from './show-pipes.component';

describe('ShowPipesComponent', () => {
  let component: ShowPipesComponent;
  let fixture: ComponentFixture<ShowPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
