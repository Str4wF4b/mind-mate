import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MindpediaPage } from './mindpedia.page';

describe('MindpediaPage', () => {
  let component: MindpediaPage;
  let fixture: ComponentFixture<MindpediaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MindpediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
