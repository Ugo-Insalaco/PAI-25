import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSolutionFormComponent } from './new-solution-form.component';

describe('NewSolutionFormComponent', () => {
  let component: NewSolutionFormComponent;
  let fixture: ComponentFixture<NewSolutionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSolutionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSolutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
