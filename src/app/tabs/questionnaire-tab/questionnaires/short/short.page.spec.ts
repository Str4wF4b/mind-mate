import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortPage } from './short.page';

describe('ShortPage', () => {
  let component: ShortPage;
  let fixture: ComponentFixture<ShortPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
