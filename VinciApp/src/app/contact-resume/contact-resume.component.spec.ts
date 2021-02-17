import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactResumeComponent } from './contact-resume.component';

describe('ContactResumeComponent', () => {
  let component: ContactResumeComponent;
  let fixture: ComponentFixture<ContactResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
