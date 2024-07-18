import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcentratePage } from './concentrate.page';

describe('ConcentratePage', () => {
  let component: ConcentratePage;
  let fixture: ComponentFixture<ConcentratePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
