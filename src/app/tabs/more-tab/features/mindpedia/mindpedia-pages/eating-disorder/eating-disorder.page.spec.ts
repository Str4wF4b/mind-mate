import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EatingDisorderPage } from './eating-disorder.page';

describe('EatingDisorderPage', () => {
  let component: EatingDisorderPage;
  let fixture: ComponentFixture<EatingDisorderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EatingDisorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
