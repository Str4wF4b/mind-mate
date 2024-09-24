import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreeYourMindPage } from './free-your-mind.page';

describe('FreeYourMindPage', () => {
  let component: FreeYourMindPage;
  let fixture: ComponentFixture<FreeYourMindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeYourMindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
