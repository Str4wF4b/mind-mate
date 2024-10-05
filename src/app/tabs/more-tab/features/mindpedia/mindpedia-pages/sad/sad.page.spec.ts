import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SadPage } from './sad.page';

describe('SadPage', () => {
  let component: SadPage;
  let fixture: ComponentFixture<SadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
