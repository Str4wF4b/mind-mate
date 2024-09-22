import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchizophreniaPage } from './schizophrenia.page';

describe('SchizophreniaPage', () => {
  let component: SchizophreniaPage;
  let fixture: ComponentFixture<SchizophreniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchizophreniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
