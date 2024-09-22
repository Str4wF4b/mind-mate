import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcdPage } from './ocd.page';

describe('OcdPage', () => {
  let component: OcdPage;
  let fixture: ComponentFixture<OcdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OcdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
