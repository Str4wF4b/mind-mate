import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovingPage } from './moving.page';

describe('MovingPage', () => {
  let component: MovingPage;
  let fixture: ComponentFixture<MovingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
