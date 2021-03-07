import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTexteComponent } from './modif-texte.component';

describe('ModifTexteComponent', () => {
  let component: ModifTexteComponent;
  let fixture: ComponentFixture<ModifTexteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTexteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
