import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyIntroductionComponent } from './survey-introduction.component';

describe('SurveyIntroductionComponent', () => {
  let component: SurveyIntroductionComponent;
  let fixture: ComponentFixture<SurveyIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
