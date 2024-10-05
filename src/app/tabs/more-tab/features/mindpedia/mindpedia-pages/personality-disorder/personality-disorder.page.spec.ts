import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalityDisorderPage } from './personality-disorder.page';

describe('PersonalityDisorderPage', () => {
  let component: PersonalityDisorderPage;
  let fixture: ComponentFixture<PersonalityDisorderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityDisorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
