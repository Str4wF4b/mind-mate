import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanicAgrophobiaPage } from './panic-agrophobia.page';

describe('PanicAgrophobiaPage', () => {
  let component: PanicAgrophobiaPage;
  let fixture: ComponentFixture<PanicAgrophobiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicAgrophobiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
