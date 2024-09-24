import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalmDownPage } from './calm-down.page';

describe('CalmDownPage', () => {
  let component: CalmDownPage;
  let fixture: ComponentFixture<CalmDownPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalmDownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
