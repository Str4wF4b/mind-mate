import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreTabPage } from './more-tab.page';

describe('MoreTabPage', () => {
  let component: MoreTabPage;
  let fixture: ComponentFixture<MoreTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
