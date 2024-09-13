import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysicalActivityPage } from './physical-activity.page';

describe('PhysicalActivityPage', () => {
  let component: PhysicalActivityPage;
  let fixture: ComponentFixture<PhysicalActivityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
