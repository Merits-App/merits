import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePopupComponent } from './experience-popup.component';

describe('ExperiencePopupComponent', () => {
  let component: ExperiencePopupComponent;
  let fixture: ComponentFixture<ExperiencePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
