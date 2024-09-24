import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkFocusPage } from './work-focus.page';

describe('WorkFocusPage', () => {
  let component: WorkFocusPage;
  let fixture: ComponentFixture<WorkFocusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFocusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
