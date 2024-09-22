import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BipolarDisorderPage } from './bipolar-disorder.page';

describe('BipolarDisorderPage', () => {
  let component: BipolarDisorderPage;
  let fixture: ComponentFixture<BipolarDisorderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BipolarDisorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
