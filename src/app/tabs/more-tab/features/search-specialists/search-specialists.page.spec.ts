import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchSpecialistsPage } from './search-specialists.page';

describe('SearchSpecialistsPage', () => {
  let component: SearchSpecialistsPage;
  let fixture: ComponentFixture<SearchSpecialistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpecialistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
