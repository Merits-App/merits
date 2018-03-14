import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsPopupComponent } from './achievements-popup.component';

describe('AchievementsPopupComponent', () => {
  let component: AchievementsPopupComponent;
  let fixture: ComponentFixture<AchievementsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
