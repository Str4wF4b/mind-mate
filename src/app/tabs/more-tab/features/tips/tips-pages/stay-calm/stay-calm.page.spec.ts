import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StayCalmPage } from './stay-calm.page';

describe('StayCalmPage', () => {
  let component: StayCalmPage;
  let fixture: ComponentFixture<StayCalmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StayCalmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
