import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireTabPage } from './questionnaire-tab.page';

describe('QuestionnaireTabPage', () => {
  let component: QuestionnaireTabPage;
  let fixture: ComponentFixture<QuestionnaireTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
