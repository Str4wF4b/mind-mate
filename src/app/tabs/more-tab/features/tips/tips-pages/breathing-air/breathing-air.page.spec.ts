import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreathingAirPage } from './breathing-air.page';

describe('BreathingAirPage', () => {
  let component: BreathingAirPage;
  let fixture: ComponentFixture<BreathingAirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathingAirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
