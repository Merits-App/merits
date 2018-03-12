import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPopupComponent } from './projects-popup.component';

describe('ProjectsPopupComponent', () => {
  let component: ProjectsPopupComponent;
  let fixture: ComponentFixture<ProjectsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
