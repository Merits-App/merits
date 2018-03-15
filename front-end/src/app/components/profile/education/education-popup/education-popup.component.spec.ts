import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPopupComponent } from './education-popup.component';

describe('EducationPopupComponent', () => {
  let component: EducationPopupComponent;
  let fixture: ComponentFixture<EducationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
