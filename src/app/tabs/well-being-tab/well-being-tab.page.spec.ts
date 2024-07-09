import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WellBeingTabPage } from './well-being-tab.page';

describe('WellBeingTabPage', () => {
  let component: WellBeingTabPage;
  let fixture: ComponentFixture<WellBeingTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WellBeingTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
