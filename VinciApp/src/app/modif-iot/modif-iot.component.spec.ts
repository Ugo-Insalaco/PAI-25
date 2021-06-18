import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifIotComponent } from './modif-iot.component';

describe('ModifIotComponent', () => {
  let component: ModifIotComponent;
  let fixture: ComponentFixture<ModifIotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifIotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
