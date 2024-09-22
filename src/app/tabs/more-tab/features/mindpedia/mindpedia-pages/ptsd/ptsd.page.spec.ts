import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PtsdPage } from './ptsd.page';

describe('PtsdPage', () => {
  let component: PtsdPage;
  let fixture: ComponentFixture<PtsdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PtsdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
