import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GadPage } from './gad.page';

describe('GadPage', () => {
  let component: GadPage;
  let fixture: ComponentFixture<GadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
