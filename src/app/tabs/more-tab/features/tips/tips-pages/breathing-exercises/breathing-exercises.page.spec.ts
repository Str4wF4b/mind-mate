import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreathingExercisesPage } from './breathing-exercises.page';

describe('BreathingExercisesPage', () => {
  let component: BreathingExercisesPage;
  let fixture: ComponentFixture<BreathingExercisesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathingExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
