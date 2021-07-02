import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Des2Component } from './des2.component';

describe('Des2Component', () => {
  let component: Des2Component;
  let fixture: ComponentFixture<Des2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Des2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Des2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
