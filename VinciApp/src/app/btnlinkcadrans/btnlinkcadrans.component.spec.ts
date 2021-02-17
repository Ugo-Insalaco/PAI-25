import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnlinkcadransComponent } from './btnlinkcadrans.component';

describe('BtnlinkcadransComponent', () => {
  let component: BtnlinkcadransComponent;
  let fixture: ComponentFixture<BtnlinkcadransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnlinkcadransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnlinkcadransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
